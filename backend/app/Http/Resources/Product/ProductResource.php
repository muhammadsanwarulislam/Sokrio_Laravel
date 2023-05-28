<?php

namespace App\Http\Resources\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource {
  /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            'stock' => $this->stock,
            'price' => $this->price,
            'unit'  => $this->unit,
            'product_code'  => $this->product_code
        ];
    }
}
