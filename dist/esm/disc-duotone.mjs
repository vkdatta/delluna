export const name="disc-duotone";
export const id="dl_6a0e8c5191104af99f27";
export const url=new URL("../icons/disc-duotone.svg?v=347a840f1f74808e3ae5a6288e3b5da631273a3990b396d3dccb3473108fdfb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
