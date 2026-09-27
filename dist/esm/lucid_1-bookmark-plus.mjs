export const name="lucid_1-bookmark-plus";
export const id="dl_6d7d6222bdc74689be13";
export const url=new URL("../icons/lucid_1-bookmark-plus.svg?v=2cb68b07906ae25828ed028f168854e378ea3d222f4f01500eb7bf65c4a0b8db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
