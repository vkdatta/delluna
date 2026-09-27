export const name="door-fill";
export const id="dl_0d1a5d6a0a164693823e";
export const url=new URL("../icons/door-fill.svg?v=6bdfef66ef4b987907fabb44ace4301e0eadac7d60a3c06fadfabe6f668e33b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
