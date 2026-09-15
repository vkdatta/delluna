export const name="emoji_transportation-fill";
export const id="dl_b0bce0849ad34bf1a5a9";
export const url=new URL("../icons/E/emoji_transportation-fill.svg?v=80ec5b14a60e7b8243a636215629ef7a0be374e1006eb71c0862746b72b1443b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
