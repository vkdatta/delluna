export const name="mobile_off-fill";
export const id="dl_c50368705950e0d873ce";
export const url=new URL("../icons/mobile_off-fill.svg?v=7b2299fede0349d256aaf60eba8e739ddd90398e70e80c9a368fd193c939af91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
