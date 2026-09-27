export const name="chart-donut-bold";
export const id="dl_fb8035e062554775b19a";
export const url=new URL("../icons/chart-donut-bold.svg?v=dc27da89516fa4f17c12614f63596b3a5908201fb4295b0c6bd588cadbd0a158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
