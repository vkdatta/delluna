export const name="emoji_symbols-fill";
export const id="dl_89ec19a5b7a3bf0cb3ed";
export const url=new URL("../icons/emoji_symbols-fill.svg?v=9ffa04361ab7199157acef466351033c72b81426c42a1f8a5de1d4464f3838f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
