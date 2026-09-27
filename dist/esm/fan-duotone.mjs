export const name="fan-duotone";
export const id="dl_7fefec197a844556b2ec";
export const url=new URL("../icons/fan-duotone.svg?v=0a98dfcd2325f4d83875da3f4618ade9a0f00303f56ed36e69dbb12785d473c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
