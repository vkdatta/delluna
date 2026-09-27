export const name="10mp-fill";
export const id="dl_29c3ef4d12c7965d1514";
export const url=new URL("../icons/10mp-fill.svg?v=85a885697097ffb45ac9fab3b6e90b9973dde81fabddbc8a6259d169cc82cdd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
