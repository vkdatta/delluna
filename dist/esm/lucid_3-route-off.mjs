export const name="lucid_3-route-off";
export const id="dl_fb292dc77a894ba68158";
export const url=new URL("../icons/lucid_3-route-off.svg?v=b4ef30339c18205ce783bc867d7399757f239f7399410144b14d0642cac9ae57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
