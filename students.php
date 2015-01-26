<?php

$pdo = new PDO('mysql:dbname=school', 'root');
switch ($_SERVER['REQUEST_METHOD']) {
case 'GET':
  // query
  $st = $pdo->query("SELECT * FROM students");
  echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
  break;
case 'POST':
  // save
  $pdo->query("INSERT INTO students VALUES()");
  $st = $pdo->query('SELECT LAST_INSERT_ID() AS id FROM students');
  echo json_encode($st->fetch(PDO::FETCH_ASSOC));
  break;
case 'PUT':
  // update
  $in = json_decode(file_get_contents('php://input'), true);
  $st = $pdo->prepare("UPDATE students SET name=:name,age=:age,comment=:comment WHERE id=:id");
  @$st->execute($in);
  break;
case 'DELETE':
  // delete
  $st = $pdo->prepare("DELETE FROM students WHERE id=?");
  $st->execute(array($_GET['id']));
  break;
}