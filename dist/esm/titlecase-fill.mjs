export const name="titlecase-fill";
export const id="dl_b0442caf34b8fabb84bf";
export const url=new URL("../icons/titlecase-fill.svg?v=ee85ac52549b97f0789cb74717d336a494b59c6cb034d2acd916e29e4d76b984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
