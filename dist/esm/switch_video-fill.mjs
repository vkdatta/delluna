export const name="switch_video-fill";
export const id="dl_6c200f06c4d0ed621a91";
export const url=new URL("../icons/switch_video-fill.svg?v=e0a7869a98c6e383777efeeeed8d4cda65982302727c9aea57a88293d6cac2fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
