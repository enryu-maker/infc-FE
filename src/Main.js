import React, { Suspense } from 'react';

import {COLORS} from './theme/Theme';
import Loading from './Component/Loading';


export const Main = ({
    Comp
}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: COLORS,
        }}>
            <Suspense fallback={<Loading />}>
                <Comp />
            </Suspense>
        </div>
    )
}