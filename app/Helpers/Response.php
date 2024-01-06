<?php

namespace App\Helpers;

class Response
{


    public static function success($data = [], $message)
    {
        return json_encode([
            'data' => $data,
            'message' => $message,
            'success' => true
        ]);
    }

    public static function error($message)
    {
        return json_encode([
            'message' => $message,
            'success' => false
        ]);
    }

}
