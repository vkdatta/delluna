export const name="intersect-three-bold";
export const id="dl_1af9b7693b0847058788";
export const url=new URL("../icons/intersect-three-bold.svg?v=f422fa9777ea02e8a167c920106e276dc2e67634a02ec8e8afc93243bfefcf13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
