export const name="mode_cool_off-fill";
export const id="dl_e226a8110c0957e83316";
export const url=new URL("../icons/mode_cool_off-fill.svg?v=e0c9d2500cefe38fcbafc79232ca5196ad4e11d27c53f2983d9e736d420ed5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
