const GroupCard = ({ image, title, onJoin }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <img src={image} alt={title} className="w-24 h-24 object-cover rounded-full mb-4" />
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <button onClick={onJoin} className="bg-blue-500 text-white px-4 py-2 rounded">Join</button>
        </div>
    );
};

export default GroupCard;