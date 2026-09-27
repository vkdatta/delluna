export const name="chart-line-down-bold";
export const id="dl_7f7dc915dc8348398e13";
export const url=new URL("../icons/chart-line-down-bold.svg?v=7a5d2616ca3a222c5afd941709c6eeb5e99d85bc817525563bf75a4056f7cf20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
