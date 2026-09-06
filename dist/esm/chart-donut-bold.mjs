export const name="chart-donut-bold";
export const id="dl_fb8035e062554775b19a";
export const url=new URL("../icons/chart-donut-bold.svg?v=4ba068feb036c9ba73eecce8162aefef7f0b5cb74909d8770e7d27e3ea17932e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
