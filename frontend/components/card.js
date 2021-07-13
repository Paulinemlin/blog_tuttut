import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <div
        key={article.title}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <div className="w-full pl-0 flex-shrink-0">
          <NextImage image={article.image} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-yellow-600">
              <a href={article.category.href} className="hover:underline">
                {article.category.name}
              </a>
            </p>
            <a href={article.href} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {article.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {article.description}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            
            <div className="">
              <p className="text-sm font-medium text-gray-900">
                <a href={article.author.href} className="hover:underline">
                  {article.author.name}
                </a>
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
