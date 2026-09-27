export const name="eco";
export const id="dl_70baf19f1fbc981290c2";
export const url=new URL("../icons/eco.svg?v=1ee8b7f9cc69de0a63ee37f0a265a98501c1d1ecb93932be35862a95be9b7af8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
