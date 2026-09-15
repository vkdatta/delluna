export const name="chair_alt";
export const id="dl_138195769cdd4269ad79";
export const url=new URL("../icons/C/chair_alt.svg?v=84dbd01ef58abcfa2d084e14e6b31e0ad826c1ae76db47c2762a2ce5c455a8cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
