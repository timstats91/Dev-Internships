export const List = ({children, ordered}) => {
    return (
        <div className={`max-w-5xl mx-auto pb-2 px-3 ${ordered ? "list-decimal" : "list-disc"}`}>{children}</div>
    )
}