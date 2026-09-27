export const name="line-vertical-bold";
export const id="dl_38d0b4c959bf4ae4a88f";
export const url=new URL("../icons/line-vertical-bold.svg?v=18f7fe2ace2d491f15a8726b42812c5d44576b9f65009969f4e1bc46de8ea63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
