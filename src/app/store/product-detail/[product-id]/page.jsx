import React from "react";
import { getProductId } from "@/libarary";

export default async function page({ params }) {
  const productId = params['product-id'];
  const product = await getProductId(productId);
  console.log(product)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700">Product Not Found</h1>
          <p className="text-gray-500 mt-2">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="relative">
            <img
              src={product.thumbnail || product.image}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
                <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-green-600 rounded-full text-sm font-semibold">
                  {product.brand || 'Premium'}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 text-white/90">
                <span className="flex items-center gap-1">
                  ⭐ <span className="font-semibold">{product.rating || 'N/A'}</span>
                </span>
                <span>•</span>
                <span>{product.reviews?.length || 0} reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-px bg-gray-200">
            <div className="bg-white p-6 text-center">
              <div className="text-3xl mb-1">💰</div>
              <p className="text-2xl font-bold text-gray-800">
                ₹{product.price}
              </p>
              <p className="text-sm text-gray-500">Price</p>
            </div>
            <div className="bg-white p-6 text-center">
              <div className="text-3xl mb-1">📦</div>
              <p className="text-2xl font-bold text-gray-800">
                {product.stock || 'N/A'}
              </p>
              <p className="text-sm text-gray-500">In Stock</p>
            </div>
            <div className="bg-white p-6 text-center">
              <div className="text-3xl mb-1">🏷️</div>
              <p className="text-2xl font-bold text-gray-800">
                {product.discountPercentage || 0}%
              </p>
              <p className="text-sm text-gray-500">Discount</p>
            </div>
            <div className="bg-white p-6 text-center">
              <div className="text-3xl mb-1">⭐</div>
              <p className="text-2xl font-bold text-gray-800">
                {product.rating || 'N/A'}
              </p>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50">
            <div className="flex flex-wrap gap-2">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Product Details
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="text-sm text-gray-500">Brand</p>
                  <p className="text-lg font-semibold text-gray-800">{product.brand}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="text-sm text-gray-500">SKU</p>
                  <p className="text-lg font-semibold text-gray-800">{product.sku}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="text-sm text-gray-500">Warranty</p>
                  <p className="text-lg font-semibold text-gray-800">{product.warrantyInformation}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="text-sm text-gray-500">Shipping</p>
                  <p className="text-lg font-semibold text-gray-800">{product.shippingInformation}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Description
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {product.reviews && product.reviews.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Customer Reviews
                  </h2>
                </div>
                <div className="space-y-4">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-800">{review.reviewerName}</span>
                        <span className="text-yellow-500">⭐ {review.rating}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🛒</div>
                  <div>
                    <h3 className="text-xl font-bold">Ready to Purchase?</h3>
                    <p className="text-white/90">
                      Add this amazing product to your cart!
                    </p>
                  </div>
                </div>
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}