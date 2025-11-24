import React from 'react';
import { Metric } from '../types';

const metrics: Metric[] = [
  {
    id: '1',
    label: 'Avg. MVP Delivery',
    value: '4',
    suffix: ' Wks',
    description: 'From whiteboard concept to deployed product.'
  },
  {
    id: '2',
    label: 'Cost Savings',
    value: '40',
    suffix: '%',
    description: 'Vs. traditional agencies with heavy management overhead.'
  },
  {
    id: '3',
    label: 'IP Ownership',
    value: '100',
    suffix: '%',
    description: 'You own every line of code. No vendor lock-in.'
  },
  {
    id: '4',
    label: 'Tech Relevance',
    value: 'A+',
    suffix: '',
    description: 'Built on the absolute latest stable AI models (Gemini 2.0).'
  }
];

export const Metrics: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center group p-4 rounded-2xl hover:bg-dark-800 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
                <span className="text-redstorm-500">{metric.suffix}</span>
              </p>
              <p className="text-lg font-bold text-gray-200">{metric.label}</p>
              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-400 leading-tight">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};