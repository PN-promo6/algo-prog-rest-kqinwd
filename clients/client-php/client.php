<?php
$albums = file_get_contents('http://localhost:3000/albums');
echo ($albums . "\n");

$members = file_get_contents('http://localhost:3000/members');
echo ($members . "\n");

$concertTours = file_get_contents('http://localhost:3000/concertTours');
echo ($concertTours . "\n");

$labels = file_get_contents('http://localhost:3000/labels');
echo $labels;
