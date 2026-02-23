import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

const DateTime = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tick = () => {
      setNow(new Date());
    };

    const intervalId = setInterval(tick, 60_000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="date">{formatter.format(now)}</div>;
};

export default DateTime;
