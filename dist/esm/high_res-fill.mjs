export const name="high_res-fill";
export const id="dl_9352df72686739f3a40f";
export const url=new URL("../icons/high_res-fill.svg?v=e0911de6f4bdb49d41f0746d46c1a12e0a849e295e204d5cf293cfcbf0f06e5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
