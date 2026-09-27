export const name="gender-male";
export const id="dl_4f1dacb587e148e3896e";
export const url=new URL("../icons/gender-male.svg?v=e8cc1928882c0e160a4605f6cb4f234b8a301011014437b657c532f5ed7dc058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
