<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'          => 'required|string',
            'stock'         => 'required|string',
            'price'         => 'required',
            'unit'          => 'required',
            'product_code'  => 'required',
            'user_id'       => 'required'
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function messages(): array
    {
      return [
          'name.required'           => 'The name field is required.',
          'stock.required'          => 'The stock filed is required.',
          'price.required'          => 'The price filed is required',
          'unit.required'           => 'The unit filed is required',
          'product_code.required'   => 'The product_code filed is required',
          'user_id.required'        => 'The user_id filed is required',
      ];
    }
}
