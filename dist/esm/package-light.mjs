export const name="package-light";
export const id="dl_3216ff4e5d1240c38e0f";
export const url=new URL("../icons/package-light.svg?v=7189e10ddad68525acf560e68cfb273b809cc67e651557f6b2bfeb76695769e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
