export const name="emoji_language";
export const id="dl_5cb50304be7d94931134";
export const url=new URL("../icons/emoji_language.svg?v=45a5d161b0ec0e4aa2d68613b79b4e275162d0294119d556605f6c32d80f769b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
