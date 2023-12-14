<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>投稿管理サイト</title>
    <link rel="shortcut icon" type="image/x-icon" href="{{ null }}">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;700&display=swap" rel="stylesheet">
</head>

<body>
    <div id="app"></div>
</body>

<style>
    #app {
        font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    }
</style>

</html>
