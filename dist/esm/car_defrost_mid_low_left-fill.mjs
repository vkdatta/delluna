export const name="car_defrost_mid_low_left-fill";
export const id="dl_780d9a260d856497c368";
export const url=new URL("../icons/car_defrost_mid_low_left-fill.svg?v=033ae8bfe5bf682063843209f47fe4ae78c68f17da5534db76e9120971bf33d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
