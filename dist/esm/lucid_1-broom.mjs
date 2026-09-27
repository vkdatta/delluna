export const name="lucid_1-broom";
export const id="dl_58f7625204fb40659eee";
export const url=new URL("../icons/lucid_1-broom.svg?v=300eb5981a19864de936793e01bf9d5b75895e3d5b83be712c16757f4bac5298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
