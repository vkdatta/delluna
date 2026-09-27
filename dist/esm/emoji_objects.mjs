export const name="emoji_objects";
export const id="dl_6c82edd05aa537957d03";
export const url=new URL("../icons/emoji_objects.svg?v=69d646924bd042b00c32e614a59561ede6c4cd11da5499ff38ebb4fe29822392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
