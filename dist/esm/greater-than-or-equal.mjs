export const name="greater-than-or-equal";
export const id="dl_1747d14e731d4919b1a6";
export const url=new URL("../icons/greater-than-or-equal.svg?v=50cf90856e54e2f2c6b1ef091c3a025ce6e65ad4c00f80dfa033f46947301c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
