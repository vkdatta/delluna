export const name="lucid_2-flip-horizontal-2";
export const id="dl_cfec710a685f45a28002";
export const url=new URL("../icons/lucid_2-flip-horizontal-2.svg?v=246b556f2f9269a5ceb91bbee2d85fdbd138b943f41425a3a5be0cb06e104254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
