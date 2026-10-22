<?php
require __DIR__ . '/vendor/autoload.php';

use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$nome = $_POST['nome'] ?? '';
$nascimento = $_POST['nascimento'] ?? '';
$serie = $_POST['serie-turma'] ?? '';
$responsavel = $_POST['responsavel'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$email = $_POST['email'] ?? '';

$phpWord = new PhpWord();
$section = $phpWord->addSection();
$section->addText("Nome do Aluno: $nome");
$section->addText("Data de Nascimento: $nascimento");
$section->addText("Série/Turma: $serie");
$section->addText("Responsável: $responsavel");
$section->addText("Telefone: $telefone");
$section->addText("E-mail: $email");

$filename = "matricula_" . $nome . time() . ".docx";
$filepath = __DIR__ . "/$filename";
$writer = IOFactory::createWriter($phpWord, 'Word2007');
$writer->save($filepath);

$mail = new PHPMailer(true);
try {
  $mail->SMTPOptions = [
  'ssl' => [
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
  ]
  ];
  $mail->isSMTP();
  $mail->Host = 'smtp.titan.email';
  $mail->SMTPAuth = true;
  $mail->Username = 'contato@csagradafamilia.com.br';
  $mail->Password = '5Wu@Q5chgkSSjG[N';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  $mail->setFrom('contato@csagradafamilia.com.br', 'Colegio Sagrada Familia');
  $mail->addAddress('sagradafamilia.smmp@hotmail.com');
  $mail->Subject = 'Nova Matricula: ' . $nome;
  $mail->Body = "Segue em anexo a matricula do aluno $nome.";
  $mail->addAttachment($filepath);

  $mail->send();
  echo "Matrícula enviada com sucesso!";
} catch (Exception $e) {
  echo "Erro ao enviar: {$mail->ErrorInfo}";
}

unlink($filepath);
?>