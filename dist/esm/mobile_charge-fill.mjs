export const name="mobile_charge-fill";
export const id="dl_f2990a32d857d1fbb32e";
export const url=new URL("../icons/mobile_charge-fill.svg?v=8ba99f663a453635a2eebc3d472276e803ba2986986e172da9982450416b94b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
