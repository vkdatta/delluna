export const name="trademark-light";
export const id="dl_e70974d7c72d2e727af2";
export const url=new URL("../icons/trademark-light.svg?v=da589f24a5478aa6278fc3af2932aafdfccbcd3dfd21c67f8febea91551aa27f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
