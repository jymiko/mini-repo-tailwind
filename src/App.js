import React from 'react'
import './assets/main.css'
import { Button } from 'antd'

function App() {
  return (
    <div className="h-64">
      <div className="p-4 m-4">
        <h1 className="text-2xl font-bold text-white">Tailwind Simple Demo</h1>
        <div className="px-6 py-6">
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">category 1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">category 2</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">category 3</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">category 4</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">category 5</span>
          <Button type="danger">Primary Button</Button>
        </div>
      </div>
      {/* <div className="p-4 m-4 w-full rounded float-right">
        testing
      </div> */}
      <div className="flex m-4">
        <div className="w-1/4 rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="https://images.unsplash.com/photo-1576457412608-a16abf6d110e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">example card</div>
            <p className="text-gray-700 text-base">
              example paragraph using tailwind css
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
          </div>
        </div>
        <div className="w-1/4 rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="https://images.unsplash.com/photo-1577601732461-807796dfbad0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">example card</div>
            <p className="text-gray-700 text-base">
              example paragraph using tailwind css
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
          </div>
        </div>
        <div className="w-1/4 rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="https://images.unsplash.com/photo-1580614875936-4888ac34052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">example card</div>
            <p className="text-gray-700 text-base">
              example paragraph using tailwind css
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
          </div>
        </div>
        <div className="w-1/4 rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="https://images.unsplash.com/photo-1595449379811-56f427b8063d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">example card</div>
            <p className="text-gray-700 text-base">
              example paragraph using tailwind css
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
