export const name="tractor-bold";
export const id="dl_540933564da2bc0209f4";
export const url=new URL("../icons/tractor-bold.svg?v=7f5383438d75e802009caa66775ffd8f1b81c87581552aa81d80f0d4450bd7d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
