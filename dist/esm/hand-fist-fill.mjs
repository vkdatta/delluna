export const name="hand-fist-fill";
export const id="dl_2593ca2598a7470b8d1e";
export const url=new URL("../icons/hand-fist-fill.svg?v=dd847a158bc5c8c5ae94b4cb203e0bcde28dbd7dfb86e197f8404cca36dcb563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
