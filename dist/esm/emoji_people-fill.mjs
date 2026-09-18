export const name="emoji_people-fill";
export const id="dl_44ba8ab3fc064264b573";
export const url=new URL("../icons/emoji_people-fill.svg?v=f532c3af84a1d37f6587079d36094f470c86ccfa6a233079319c1f52754547c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
