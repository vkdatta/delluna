export const name="emoji_language-fill";
export const id="dl_ffe571c6551f6c3a24a3";
export const url=new URL("../icons/emoji_language-fill.svg?v=a15f22992fd94bffc93372052a7a98c5759da9820a143e0819d302ae471f9bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
