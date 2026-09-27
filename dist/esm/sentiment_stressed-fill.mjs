export const name="sentiment_stressed-fill";
export const id="dl_cc3c5a34048396dd7a29";
export const url=new URL("../icons/sentiment_stressed-fill.svg?v=80b3d92f2810c49fe355c244188b514c6954086ba6622c1d40a7f3f3d0f2b2ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
