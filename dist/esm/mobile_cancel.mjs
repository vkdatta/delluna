export const name="mobile_cancel";
export const id="dl_d77443c77c4d1450c3e1";
export const url=new URL("../icons/mobile_cancel.svg?v=55e66107a326b3c336c9557ce743286472e8ff65c70da099a9701e047d464347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
