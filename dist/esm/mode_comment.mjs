export const name="mode_comment";
export const id="dl_96226d69872a4fea8d7c";
export const url=new URL("../icons/mode_comment.svg?v=08ec24fb455bfd30322861e16ebaeada056dfc78349894f8c580178fe03df6e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
