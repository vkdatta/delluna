export const name="flash_off";
export const id="dl_c6c10d67a58b99cb3141";
export const url=new URL("../icons/flash_off.svg?v=c64c9b348c43665bceeab63596aa1791ae3be8fe3533d5ebebe396e6d3dd93c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
