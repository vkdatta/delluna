export const name="emoji_nature-fill";
export const id="dl_801b6938ab54c6773531";
export const url=new URL("../icons/emoji_nature-fill.svg?v=2b816609c449efcfea24cdb780e7f9faf01b22a85e2119409999005be3dd5fcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
