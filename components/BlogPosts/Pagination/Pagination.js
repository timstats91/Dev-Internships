export const Pagination = ({ totalPages, onPageClick }) => {
    return (
        <div className="max-w-5xl mx-auto my-11 flex gap-2 justify-center">
            {Array.from({length: totalPages}).map((_, i) => (
                <div key={i} className="btn-page" onClick={() => {
                    onPageClick(i + 1)
                }}>
                    {i + 1}
                </div>
            ))}
        </div>
    )
}