export const name="breastfeeding-fill";
export const id="dl_e336d8baf28621b9719d";
export const url=new URL("../icons/breastfeeding-fill.svg?v=fc65148db80f0d0fbde4b1762fe911d686e527e417147115cc9c58b212f278be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
