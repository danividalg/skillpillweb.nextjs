import 'server-only';

import { Suspense } from 'react';
import { HelloResponse } from './helloResponse';

export default function Hello() {
    return (
        <Suspense fallback={<Loading />} >
            <HelloResponse />
        </Suspense>
    );
}

function Loading() {
    return <div>Loading...</div>;
}
