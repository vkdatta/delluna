export const name="offset";
export const id="dl_559420d9b80942c4aa91";
export const url=new URL("../icons/offset.svg?v=4597fdcec0761a8b6a396bf5434fc360162e3658f94b6898f921dfc9053de03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
