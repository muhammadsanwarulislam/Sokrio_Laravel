<?php
namespace Repository\Product;

use App\Models\Product;
use Repository\BaseRepository;

class ProductRepository extends BaseRepository {

  public function model()
  {
      return Product::class;
  }

}
