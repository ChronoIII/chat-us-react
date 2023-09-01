const type = {
    sender: 'self-end bg-blue-400 text-white',
    receiver: 'self-start bg-gray-200'
};

const MessageBubble = (props) => {
    return (
        <div className={`${type[props.type]} p-2 mb-1 rounded-2xl text-sm max-w-xs lg:max-w-lg`}>
            <p className="text-wrap break-words">
                { props.message ?? 'testdklfjanklsdfjlfkljfkldjsflkjslkjklfjasklfjdsklfjkldsjfkldjflkdjasfkljsdkfljklfjdkslafjksldfjkdlsfjklasdjfkljdkslfjklsjklfjsdklfj' }
            </p>
        </div>
    )
}

export default MessageBubble;