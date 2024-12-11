import React, { forwardRef } from 'react';
import Image from 'next/image';

const Loading = forwardRef<HTMLDivElement, object>((props, ref) => {
  return (
    <div ref={ref} className="h-screen-nav flex w-full items-center justify-center hidden">
      <div className="animate-spin">
        <Image
          src="/gp2.png"
          height={250}
          width={250}
          alt="Growth Partners icon"
        />
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
