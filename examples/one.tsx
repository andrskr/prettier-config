import type { PluginConfig } from '@ianvs/prettier-plugin-sort-imports';
import type { Config } from 'prettier';

/**
 * @example
 *   var one = 5;
 *   var two = 10;
 *
 *   if (one > 2) {
 *     two += one;
 *   }
 */

function HelloWorld({ greeting = 'hello', greeted = '"World"', silent = false, onMouseOver }) {
  if (!greeting) {
    return null;
  }

  const obj = {
    one: 1,
    two: 2,
    three: 3,
  };

  // TODO: Don't use random in render
  let num = Math.floor(Math.random() * 1e7)
    .toString()
    .replace(/\.\d+/gi, '');

  return (
    <div
      className="relative flex min-h-screen flex-col justify-center overflow-hidden rounded bg-blue-500 bg-gray-50 px-4 py-2 py-6 text-base text-white sm:py-12"
      title={`You are visitor number ${num}`}
      onMouseOver={onMouseOver}
    >
      <strong>{greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}</strong>
      {greeting[greeting.length - 1] === ',' ? ' ' : <span style={{ color: 'grey' }}>", "</span>}
      <em className="text-sm font-bold text-gray-900">{greeted}</em>
      {silent ? '.' : '!'}
    </div>
  );
}
