<?php

namespace App\Http\Controllers;

use App\Helpers\Response;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TaskController extends Controller
{


    public function deleteTask(Task $task, Request $request)
    {
        $task->delete();
        return Response::success([], 'Task deleted successfully');
    }

    public function changeCompleteStatus(Task $task, Request $request)
    {
        $task->is_completed = $request->status;
        $task->save();
        return Response::success([], 'Task Complete status changed');
    }

    public function changeTaskPriority(Task $task, Request $request)
    {

        $task->priority = Str::upper($request->status);
        $task->save();
        return Response::success([], 'Task Priority Changed');
    }

    public function get()
    {
        $tasks = Task::all()->groupBy('priority')->toArray();
        if (!isset($tasks['LOW'])) {
            $tasks['LOW'] = [];
        }
        if (!isset($tasks['MEDIUM'])) {
            $tasks['MEDIUM'] = [];
        }
        if (!isset($tasks['HIGH'])) {
            $tasks['HIGH'] = [];
        }

        $tasks = ['Low' => $tasks['LOW'], 'Medium' => $tasks['MEDIUM'], 'High' => $tasks['HIGH']];

        return Response::success(['tasks' => $tasks], 'Task Fetched');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'priority' => ['required'],
        ]);

        $task = Task::updateOrCreate([
            'id' => $request->id
        ], [
            'title' => $request->name,
            'description' => $request->description,
            'priority' => $request->priority,
            'is_completed' => $this->isTrue($request->is_completed),
            'image' => Storage::disk('task_image')->put('',$request->file('image'))
        ]);

        return Response::success($task, 'Task details saved');
    }

    // we can also create this in helper
    private function isTrue($value){
        return $value == true || $value == 'true';
    }
}
