<?php

namespace App\Http\Controllers\Core\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\JsonResponseTrait;
use Repository\Product\ProductRepository;
use App\Http\Resources\Product\ProductResource;
use App\Http\Requests\Product\ProductPostRequest;

class ProductManagementController extends Controller
{
    use JsonResponseTrait;

    protected $productRepository;

    function __construct(ProductRepository $productRepository)
    {
        $this->productRepository   =  $productRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $products =$this->productRepository->getAll();
      return $this->json('List of Products', ProductResource::collection($products));
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
    public function store(ProductPostRequest $request)
    {
      $product = $this->productRepository->create($request->validated());

      return $this->json('Product create successfully',[
          'product'          => $product,
      ]);
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
