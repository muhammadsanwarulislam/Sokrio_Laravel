<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Repository\User\UserRepository;

class UserSeeder extends Seeder
{
    protected $userRepository, $roleRepository;

    function __construct(UserRepository $userRepository)
    {
        $this->userRepository   =  $userRepository;
    }
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->userRepository->model()::create([
            'name'      => 'Muhammad', 
            'email'     => 'super@gmail.com',
            'password'  => 'password'
        ]);

        $this->userRepository->model()::create([
            'name'      => 'Admin',
            'email'     => 'admin@gmail.com',
            'password'  => 'password'
        ]);
        
        $this->userRepository->model()::create([
            'name'      => 'User',
            'email'     => 'user@gmail.com',
            'password'  => 'password'
        ]);
    }
}
