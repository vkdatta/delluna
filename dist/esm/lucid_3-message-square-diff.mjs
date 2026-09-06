export const name="lucid_3-message-square-diff";
export const id="dl_60695770b86d469e8ba7";
export const url=new URL("../icons/lucid_3-message-square-diff.svg?v=ec629f4d5da80fc1591f7bab93d4cdbd29f330eca68424279ccd21ed37e4a225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
