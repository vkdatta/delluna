export const name="lucid_3-message-square-reply";
export const id="dl_60c744a24be54f73a220";
export const url=new URL("../icons/lucid_3-message-square-reply.svg?v=f6e66bcbb57bf3b1d7adfe90c5f99cac7611eb5b7131e4c23bf7f78c112ee3d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
