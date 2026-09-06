export const name="lucid_1-arrow-down-from-line";
export const id="dl_0a1d92bb097948eea3b9";
export const url=new URL("../icons/lucid_1-arrow-down-from-line.svg?v=93cae55c58246617dc5531e980c4e690b8285d0df0c1c41f33579ea43be28e6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
