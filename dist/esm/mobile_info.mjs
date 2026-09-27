export const name="mobile_info";
export const id="dl_430f00d23855dfee15e7";
export const url=new URL("../icons/mobile_info.svg?v=0b53ccdf8528e76f90e63cce376546cf75a89027920443f35c129be62f0e339e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
