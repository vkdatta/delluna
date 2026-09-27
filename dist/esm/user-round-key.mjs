export const name="user-round-key";
export const id="dl_fe4d5d0045d64fd9a895";
export const url=new URL("../icons/user-round-key.svg?v=37190a02e73acdcfb2f32e991f3ce9543dd403575b21fa8ed3ed7945b6748c08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
