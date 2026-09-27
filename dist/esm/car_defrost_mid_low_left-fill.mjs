export const name="car_defrost_mid_low_left-fill";
export const id="dl_c04b8fed3b297e1dfc95";
export const url=new URL("../icons/car_defrost_mid_low_left-fill.svg?v=caf02c71c38c88006b82f1a1fd5ba8d5c6936fb79a576c061f4c5dac131aac9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
