<?php

namespace Repository\User;

use App\Models\User;
use Hamcrest\Type\IsBoolean;
use Repository\BaseRepository;
class UserRepository extends BaseRepository
{

    public function model()
    {
        return User::class;
    }

    public function getAllUsersWithRole()
    {
        return $this->model()::with('role')->paginate(10);
    }

    public function findByIDWithRole($id)
    {
        return $this->model()::with('role')->find($id);
    }
    
    public function generateAccessToken(User $user): string
    {
        return $user->createToken('authToken')->accessToken;
    }

    public function generateDefaultPassword(): string
    {
        return '12345678';
    }

}