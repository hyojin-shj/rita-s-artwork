import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 임시 데이터 (나중에 실제 데이터로 교체)
const artworks = [
  {
    id: '1',
    title: '첫 번째 작품',
    description: '자연의 아름다움을 표현한 수채화',
    imageUrl: '/images/placeholder.jpg',
  },
  // 더 많은 작품을 추가할 수 있습니다
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">내 포트폴리오</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <Link href={`/artwork/${artwork.id}`} key={artwork.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
                  <p className="text-gray-600">{artwork.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 