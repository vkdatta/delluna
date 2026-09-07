export const name="arrow-u-right-down-light";
export const id="dl_420bcbf52cae43c6b188";
export const url=new URL("../icons/arrow-u-right-down-light.svg?v=6325399184bd970b6222e5e818c2c671215e6421dc609921c6062b70e4e8d749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
