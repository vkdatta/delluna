export const name="chart-donut-bold";
export const id="dl_fb8035e062554775b19a";
export const url=new URL("../icons/chart-donut-bold.svg?v=abeed526707132f1d9d362b471de38a535705dbab6b1787e2149af647de25523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
