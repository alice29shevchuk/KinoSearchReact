<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KinoController extends Controller
{
    public function index(Request $request){
        //&page=1
        $client = new \GuzzleHttp\Client(['header' => ['Access-Control-Allow-Origin' => '*']]);
        $response = $client->request('GET', 'https://api.themoviedb.org/3/search/movie?api_key=342f24ad91a1569e469f5ad24f0639d5&language=en-US&query='.$request['title'].'&include_adult=false');
        $RESULT =  $response->getBody();
        echo $RESULT;
    }
    public function getPopularFilm(Request $request){
        $client = new \GuzzleHttp\Client(['header' => ['Access-Control-Allow-Origin' => '*']]);
        $response = $client->request('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=342f24ad91a1569e469f5ad24f0639d5&language=en-US&page=3');
        $RESULT =  $response->getBody();
        echo $RESULT;
    }
    public function getTrendFilm(Request $request){
        $client = new \GuzzleHttp\Client(['header' => ['Access-Control-Allow-Origin' => '*']]);
        $response = $client->request('GET', 'https://api.themoviedb.org/3/trending/all/'.$request['dayweek'].'?api_key=342f24ad91a1569e469f5ad24f0639d5');
        $RESULT =  $response->getBody();
        echo $RESULT;
    }
    public function getTrailers(Request $request){
        $client = new \GuzzleHttp\Client(['header' => ['Access-Control-Allow-Origin' => '*']]);
        $response = $client->request('GET', 'https://api.themoviedb.org/3/movie/'.$request['id'].'/videos?api_key=342f24ad91a1569e469f5ad24f0639d5&language=pt-BR  ');
        $RESULT =  $response->getBody();
        echo $RESULT;
    }
}
