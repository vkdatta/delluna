export const name="frame_person-fill";
export const id="dl_a2289cc3a9f01caf3641";
export const url=new URL("../icons/frame_person-fill.svg?v=1152024ed64407347ece4bceeee56adab6ef75315ab697a26c361de082055585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
