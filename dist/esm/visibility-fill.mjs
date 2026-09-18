export const name="visibility-fill";
export const id="dl_a2d42ba5141d49b8aac5";
export const url=new URL("../icons/V/visibility-fill.svg?v=c1fe7aed133fed68d866f98153c9aa3308847f04c67c7fb942502642ee5693e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
