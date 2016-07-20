<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create(['construction_id'=>1,'name'=>'MinhCategory1']);
        Category::create(['construction_id'=>1,'name'=>'MinhCategory2']);
    }
}