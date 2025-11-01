import type { ReactNode } from 'react';
import fs from 'node:fs/promises';
import type { ImageResponseOptions } from 'next/server';

export interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  site?: ReactNode;
  logo?: ReactNode;
}

const font = fs.readFile('./lib/JetBrainsMono-Regular.ttf');
const fontBold = fs.readFile('./lib/JetBrainsMono-Bold.ttf');

export async function getImageResponseOptions(): Promise<ImageResponseOptions> {
  return {
    width: 1920,
    height: 961,
    fonts: [
      {
        name: 'Mono',
        data: await font,
        weight: 400,
      },
      {
        name: 'Mono',
        data: await fontBold,
        weight: 600,
      },
    ],
  };
}

export function generate({
  title,
  description
}: GenerateProps) {
  const primaryTextColor = 'rgb(240,240,240)';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Background image layer */}
      <img
        src="https://repository-images.githubusercontent.com/1079186972/d4b08ed8-53c3-44de-86b7-16aa34890942"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Content layer */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          paddingTop: '16rem',
          paddingLeft: '2rem',
          position: 'relative',
        }}
      >
        <p
          style={{
            fontWeight: 600,
            fontFamily: 'Mono',
            fontSize: '76px',
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: '48px',
            fontFamily: 'Mono',
            color: 'rgba(240,240,240,0.7)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
