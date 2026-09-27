export const name="heart-break-fill";
export const id="dl_93e6de80f9e1445f8034";
export const url=new URL("../icons/heart-break-fill.svg?v=e1db7d1847272f5111c6d2ad7aef64e8b90c7b944bdb761062ac11d98e122593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
