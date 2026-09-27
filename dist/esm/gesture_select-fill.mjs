export const name="gesture_select-fill";
export const id="dl_9b1df2ca3f0b649f83fe";
export const url=new URL("../icons/gesture_select-fill.svg?v=eeb1a1215e3e7e1e6f356d89e80c871e063daac5c6086e920254f21aab3fdae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
