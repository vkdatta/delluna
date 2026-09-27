export const name="lucid_1-arrow-down-0-1";
export const id="dl_597e7dea3e59497991ab";
export const url=new URL("../icons/lucid_1-arrow-down-0-1.svg?v=5012c86a1af408c829481413320a284f31814ca9d2ab73ad2925c0d966a71c3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
