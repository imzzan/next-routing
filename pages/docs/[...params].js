import React from 'react';
import { useRouter } from 'next/router';

const Docs = () => {
    const router = useRouter();
    const {params = [] } = router.query;
    console.log(params);

    if (params.length === 1) {
        return (
            <h1>Viewing docs for features {params[0]} and consep {params[1]}</h1>
        )
    } else if ( params.length === 1) {
        return <h1>Viewing docs for features {params[0]}</h1>
    }
  return (
    <div>
        <h1>Docs</h1>
    </div>
  )
}

export default Docs