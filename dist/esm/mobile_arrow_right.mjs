export const name="mobile_arrow_right";
export const id="dl_bd02dd091e044db5a418";
export const url=new URL("../icons/mobile_arrow_right.svg?v=7e32ae8f7ff7f5558abb5ce509d4697d6ea9fc086afe3a77d66d7ef38e481592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
