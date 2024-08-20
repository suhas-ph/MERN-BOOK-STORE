// Blog.jsx
import React from 'react';
import './../blog/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Art of Reading',
      content:
        'Reading is a journey of discovery. It takes us to different worlds, introduces us to new characters, and broadens our horizons. Whether you prefer fiction or non-fiction, the act of reading is a powerful and transformative experience.',
      facts: [
        'Reading reduces stress.',
        'Reading improves focus and concentration.',
        'Books are a great source of knowledge.',
      ],
      color: 'bg-blue-300',
    },
    {
      title: 'The Power of Imagination',
      content:
        'Imagination is the key to creativity. When we read, we exercise our imagination muscles, envisioning the scenes and characters described in the book. It sparks innovation and allows us to see the world from different perspectives.',
      facts: [
        'Imagination fuels creativity.',
        'Books transport you to different worlds.',
        'Immersive storytelling sparks innovation.',
      ],
      color: 'bg-green-300',
    },
    {
      title: 'Discovering New Perspectives',
      content:
        'Books open doors to different cultures, ideas, and perspectives. They expose us to diverse voices and help us develop empathy and understanding. Exploring various viewpoints through literature enhances our awareness of the world.',
      facts: [
        'Books expose you to diverse perspectives.',
        'Reading fosters empathy and understanding.',
        'Exploring different cultures enhances awareness.',
      ],
      color: 'bg-yellow-300',
    },
    {
      title: 'The Joy of Learning',
      content:
        'Learning is a lifelong journey, and books are our constant companions in this adventure. Whether you\'re exploring new subjects or diving deep into your favorite topics, the joy of learning through reading is unparalleled.',
      facts: [
        'Continuous learning leads to personal growth.',
        'Books are a lifelong source of education.',
        'Knowledge opens doors to new opportunities.',
      ],
      color: 'bg-purple-300',
    },
    {
      title: 'Escaping Reality Through Fiction',
      content:
        'Fictional stories provide a much-needed escape from the demands of reality. They transport us to magical realms, introduce us to captivating characters, and offer a respite from the challenges of everyday life.',
      facts: [
        'Fictional stories provide an escape from reality.',
        'Immersive narratives offer a break from routine.',
        'Characters become companions in the journey.',
      ],
      color: 'bg-pink-300',
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to our <span className="text-blue-500">Book</span>{' '}
        <span className="text-pink-500">Blog</span>
      </h1>

      {blogPosts.map((post, index) => (
        <div
          key={index}
          className={`mb-8 p-6 rounded-md shadow-lg ${post.color}`}
        >
          <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
          <p className="mb-6">{post.content}</p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Interesting Facts:</h3>
            <ul>
              {post.facts.map((fact, idx) => (
                <li key={idx} className="list-disc ml-4">
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
