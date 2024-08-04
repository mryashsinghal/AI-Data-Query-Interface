const Message = ({ text, type }) => (
    <div className={`message-bubble ${type === 'user' ? 'bg-brown animate-messageSlide' : 'bg-slate-900 animate-messageSlide2 text-white'} text-black p-2 mb-2 rounded {animate-messageSlide}`}>
        {text}
    </div>
);

export default Message;
