export const name="emoji_nature";
export const id="dl_f7fe4ab4450942ddb596";
export const url=new URL("../icons/emoji_nature.svg?v=f87addbb9745932b270cbfd61e949fc9930b32026331f43610cd548f68007d6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
