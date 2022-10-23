import React from 'react'
import { useRouter } from 'next/router';

const Review = () => {

    const router = useRouter();
    const {productId, reviewId} = router.query;

  return (
    <div>
        <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  )
}

export default Review