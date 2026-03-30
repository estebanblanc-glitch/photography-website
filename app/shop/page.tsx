'use client';

import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Impresión Fotográfica 8x10',
    price: 25,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Impresión profesional en papel fotográfico de alta calidad'
  },
  {
    id: 2,
    name: 'Álbum de Boda Digital',
    price: 150,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
    description: 'Álbum digital editable con todas las fotos de tu boda'
  },
  {
    id: 3,
    name: 'Sesión de Fotos + Impresiones',
    price: 300,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    description: 'Sesión fotográfica completa con 20 impresiones 5x7'
  },
  {
    id: 4,
    name: 'Paquete Premium',
    price: 500,
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400',
    description: 'Sesión + álbum digital + 50 impresiones + USB con todas las fotos'
  }
];

export default function Shop() {
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const product = products.find(p => p.id === parseInt(id));
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  const handleCheckout = () => {
    // Here you would integrate with Stripe
    alert('Funcionalidad de pago próximamente. Total: $' + getTotal());
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Tienda de Productos</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        Agregar al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>

            {Object.keys(cart).length === 0 ? (
              <p className="text-gray-500">Tu carrito está vacío</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {Object.entries(cart).map(([id, quantity]) => {
                    const product = products.find(p => p.id === parseInt(id));
                    if (!product) return null;
                    return (
                      <div key={id} className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-sm text-gray-600">${product.price} x {quantity}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="text-green-500 hover:text-green-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-blue-600">${getTotal()}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Proceder al Pago
                  </button>
                </div>
              </>
            )}

            <div className="mt-6 text-sm text-gray-600">
              <p>• Envío gratuito en pedidos mayores a $100</p>
              <p>• Devoluciones aceptadas en 30 días</p>
              <p>• Pago seguro con Stripe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}