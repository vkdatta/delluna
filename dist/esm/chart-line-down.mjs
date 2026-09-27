export const name="chart-line-down";
export const id="dl_b9dfa3c146e2405f8288";
export const url=new URL("../icons/chart-line-down.svg?v=b3c66a798ea3cc68f5ec6785ff17ac406b3c40903522dd4b1b7e1589f843d2b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
