<?php

namespace App\Http\Resources\Purchase;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'product_id'    => $this->product_id,
            'invoice_no'    => $this->invoice_no,
            'note'          => $this->note,
            'unit'          => $this->unit,
            'total_price'   => $this->total_price,
            'date'          => $this->date
        ];
    }
}
