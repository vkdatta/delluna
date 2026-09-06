export const name="number-nine-duotone";
export const id="dl_1d9a35aa53c94957953c";
export const url=new URL("../icons/number-nine-duotone.svg?v=d702e32e703e6172699f9fe5e3d1118679e5b59d376c2ed5058a897e38243dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
