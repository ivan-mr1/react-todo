const DateTime = () => {
  const dateNow = new Date().toLocaleString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return <div className="date">{dateNow}</div>;
};

export default DateTime;
