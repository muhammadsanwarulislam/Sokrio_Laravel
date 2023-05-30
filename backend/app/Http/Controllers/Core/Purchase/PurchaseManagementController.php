<?php

namespace App\Http\Controllers\Core\Purchase;

use Illuminate\Http\Request;
use Repository\User\UserRepository;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Repository\Product\ProductRepository;
use App\Http\Controllers\JsonResponseTrait;
use Repository\Purchase\PurchaseRepository;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Purchase\PurchaseResource;
use App\Http\Resources\Product\CurrentUserProductResource;

class PurchaseManagementController extends Controller
{
    use JsonResponseTrait;

    protected $purchaseRepository;
    protected $productRepository;
    protected $userRepository;

    function __construct(PurchaseRepository $purchaseRepository, ProductRepository $productRepository, UserRepository $userRepository)
    {
        $this->purchaseRepository   =  $purchaseRepository;
        $this->productRepository    =   $productRepository;
        $this->userRepository       =   $userRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $purchase = $this->purchaseRepository->getAll();
        return $this->json('List of Purchase Products', PurchaseResource::collection($purchase));
    }

    public function currentUserAllProducts()
    {
        $products =$this->userRepository->getCurrentUserAllProducts(Auth::user()->id);
        return $this->json('List of all Products',new CurrentUserProductResource($products));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
