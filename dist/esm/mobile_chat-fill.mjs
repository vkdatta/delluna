export const name="mobile_chat-fill";
export const id="dl_3b6ec32abbcc739f4e1d";
export const url=new URL("../icons/mobile_chat-fill.svg?v=4202f8e26858ee8a06d4c8e17e4875aee240983b0ffd2aab445bfed1f2af7b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
