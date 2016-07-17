<?php

namespace App\Http\Controllers;

use App\Category;
use App\Construction;

class ConstructionController extends Controller
{
    function getCategories($id) {
        $construction = Construction::find($id);
        $construction->categories = Category::where('construction_id',$id)->get();
        return response()->json($construction);
    }
}