export const name="fire_check-fill";
export const id="dl_a05461ef175dfe111c73";
export const url=new URL("../icons/fire_check-fill.svg?v=d6c1d1b5af521a8a5d519c0b82a1f8410f08285b79490427cbc8b16ecb903c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
