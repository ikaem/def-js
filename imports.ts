import('./somemodule.js').then((stats) => {
  const average = stats.mean(data);
});

async function analyze(data) {
  const stats = await import('./somet.js');

  return {
    av: stats.av(data),
    perc: stats.pe(data),
  };
}
