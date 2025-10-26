const Card = ({ title }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
    <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
  </div>
);

export default Card;