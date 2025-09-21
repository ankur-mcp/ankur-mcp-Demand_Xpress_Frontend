export default function Pagination({ page, total, limit, onChange }) {
  const totalPages = Math.ceil(total / limit);
  return (
    <div>
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>Prev</button>
      <span>{page} / {totalPages}</span>
      <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>Next</button>
    </div>
  );
}
