export const name="nut-duotone";
export const id="dl_dece4a949d994a189694";
export const url=new URL("../icons/nut-duotone.svg?v=5666692bfe4c6adc1129469970417e7d3ecdff68e44fc986bba4af5347344736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
