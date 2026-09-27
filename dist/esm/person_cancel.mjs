export const name="person_cancel";
export const id="dl_b3513c88e4dbb9320655";
export const url=new URL("../icons/person_cancel.svg?v=d2bbcc643b425f0b939f9b6019512870b4c9b3d89ff204a3150f3c83749b2733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
