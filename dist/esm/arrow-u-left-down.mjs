export const name="arrow-u-left-down";
export const id="dl_464b328dedc947f19e21";
export const url=new URL("../icons/arrow-u-left-down.svg?v=70aa42045bb84ff3d8633694d9f24a7134d6861333d1ffb09148220d61c257fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
