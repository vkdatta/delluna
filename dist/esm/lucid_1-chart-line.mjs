export const name="lucid_1-chart-line";
export const id="dl_1cf978d213d0438dae4a";
export const url=new URL("../icons/lucid_1-chart-line.svg?v=ddbf317b51502550a25e73f779fda6e330bdedefa4566362ea7b725adf642517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
