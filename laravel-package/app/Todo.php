<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = ['title', 'computed'];

    protected $casts = ['computed' => 'boolean'];
}
