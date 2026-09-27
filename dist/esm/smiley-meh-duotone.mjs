export const name="smiley-meh-duotone";
export const id="dl_e1df34cd7a3e3097be10";
export const url=new URL("../icons/smiley-meh-duotone.svg?v=bce7a3d9eb348310b0d752071e65ba945228a7094278813b2ff93a69b3a8f3ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
