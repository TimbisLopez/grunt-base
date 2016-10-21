<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;

$container = $app->getContainer();
$container['view'] = function ($container) {
    return new \Slim\Views\PhpRenderer('./');
};

$app->get('/', function (Request $request, Response $response) {

	return $this->view->render($response, 'index_.html');
    return $response;
});
$app->run();