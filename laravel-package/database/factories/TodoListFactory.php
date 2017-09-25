<?php

use Faker\Generator as Faker;

$factory->define(App\Todo::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(8),
        'computed' => $faker->randomElement(array(true, false))
    ];
});
