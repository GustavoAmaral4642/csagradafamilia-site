<?php
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: text/plain; charset=UTF-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Utilize o formulário de matrícula para enviar os dados.');
}

$fields = [];
foreach (['nome', 'nascimento', 'serie-turma', 'responsavel', 'telefone', 'email'] as $key) {
    $value = $_POST[$key] ?? '';
    if (!is_string($value) || trim($value) === '' || strlen($value) > 500) {
        http_response_code(422);
        exit('Preencha todos os campos com dados válidos.');
    }
    $fields[$key] = trim($value);
}
if (!filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    exit('Informe um endereço de e-mail válido.');
}

// Configure estas variáveis no ambiente do servidor, fora da pasta pública.
$config = [];
foreach (['SMTP_HOST', 'SMTP_USERNAME', 'SMTP_PASSWORD', 'SMTP_FROM', 'SMTP_TO'] as $key) {
    $config[$key] = getenv($key);
    if ($config[$key] === false || trim($config[$key]) === '') {
        http_response_code(503);
        exit('O envio de matrículas está temporariamente indisponível. Entre em contato com a secretaria.');
    }
}
$port = filter_var(getenv('SMTP_PORT') ?: '587', FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1, 'max_range' => 65535],
]);
if ($port === false || !filter_var($config['SMTP_FROM'], FILTER_VALIDATE_EMAIL)
    || !filter_var($config['SMTP_TO'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(503);
    exit('O envio de matrículas está temporariamente indisponível.');
}

$filepath = null;
try {
    require __DIR__ . '/vendor/autoload.php';
    \PhpOffice\PhpWord\Settings::setOutputEscapingEnabled(true);
    $phpWord = new PhpWord();
    $section = $phpWord->addSection();
    foreach ([
        'nome' => 'Nome do Aluno',
        'nascimento' => 'Data de Nascimento',
        'serie-turma' => 'Série/Turma',
        'responsavel' => 'Responsável',
        'telefone' => 'Telefone',
        'email' => 'E-mail',
    ] as $key => $label) {
        $section->addText($label . ': ' . $fields[$key]);
    }
    $filepath = tempnam(sys_get_temp_dir(), 'matricula_');
    if ($filepath === false) {
        throw new \RuntimeException('Não foi possível criar o documento temporário.');
    }
    IOFactory::createWriter($phpWord, 'Word2007')->save($filepath);

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = $config['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['SMTP_USERNAME'];
    $mail->Password = $config['SMTP_PASSWORD'];
    $mail->SMTPSecure = $port === 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $port;
    $mail->setFrom($config['SMTP_FROM'], 'Colégio Sagrada Família');
    $mail->addAddress($config['SMTP_TO']);
    $mail->addReplyTo($fields['email'], $fields['responsavel']);
    $mail->Subject = 'Nova Matrícula: ' . $fields['nome'];
    $mail->Body = 'Segue em anexo a matrícula do aluno ' . $fields['nome'] . '.';
    $mail->addAttachment($filepath, 'matricula.docx');
    $mail->send();
    echo 'Matrícula enviada com sucesso!';
} catch (\Throwable $error) {
    http_response_code(500);
    error_log('Falha no processamento da matrícula (' . get_class($error) . ').');
    echo 'Não foi possível enviar a matrícula. Tente novamente ou entre em contato com a secretaria.';
} finally {
    if (is_string($filepath) && is_file($filepath)) {
        unlink($filepath);
    }
}
