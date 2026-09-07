export const name="smiley-sticker-fill";
export const id="dl_9782b9c2aac34878a5be";
export const url=new URL("../icons/S/smiley-sticker-fill.svg?v=9f916ccd66861e82af6e37ee606b7c55e35d36d950fdcd96cd22b700c83c1b71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
