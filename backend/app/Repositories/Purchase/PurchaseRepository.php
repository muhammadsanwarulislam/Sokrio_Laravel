<?php
namespace Repository\Purchase;

use App\Models\Purchase;
use Repository\BaseRepository;

class PurchaseRepository extends BaseRepository {

  public function model()
  {
      return Purchase::class;
  }

}