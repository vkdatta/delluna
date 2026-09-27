export const name="bedtime-fill";
export const id="dl_0fae5938ab0ed490818b";
export const url=new URL("../icons/bedtime-fill.svg?v=d84bede369420f9d799ab9437ae36269dc5e11e5d22f8f72d099b07e75459976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
