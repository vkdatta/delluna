export const name="dots-three-fill";
export const id="dl_3577c9a783bc42d7b442";
export const url=new URL("../icons/dots-three-fill.svg?v=ea89ce2abd3e96a9473c7dbdefef4182d25704635c6f799a7dd10707a2c95764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
