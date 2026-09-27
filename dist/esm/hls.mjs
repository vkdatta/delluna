export const name="hls";
export const id="dl_f878507c9913397c6742";
export const url=new URL("../icons/hls.svg?v=4e2bc4da9512b1a6b216b4f73a2f756aaa80198ea125eb1a62ad2cfe7652b5d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
