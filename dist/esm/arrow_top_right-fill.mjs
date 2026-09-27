export const name="arrow_top_right-fill";
export const id="dl_74bc2873a318bf1814c5";
export const url=new URL("../icons/arrow_top_right-fill.svg?v=d439ee19ee09f6ba7bc21f4848f8d39c7ed6d53ba8fd8695befd639e017c4100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
