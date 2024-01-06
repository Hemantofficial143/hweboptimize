<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Task extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'is_completed',
        'priority','image'
    ];

    protected $appends = [
        'image_url'
    ];

    public function getImageUrlAttribute(){
        return $this->image != null ? Storage::disk('task_image')->url($this->image) : null;
    }
    public function getIsCompletedAttribute($value){
        return $value == 1 ? true : false;
    }

}
