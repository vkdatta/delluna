export const name="clover-fill";
export const id="dl_4507b772bdbb4bbc8425";
export const url=new URL("../icons/clover-fill.svg?v=86f4a3ae498b6c0025c234b9c52ad7609ef50ce437ec9bacc5c31b19270f73ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
