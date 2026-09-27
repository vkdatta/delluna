export const name="deceased";
export const id="dl_e260a3cf921ec25200e6";
export const url=new URL("../icons/deceased.svg?v=0927b183f481c7c56b997dc69c51c118818292aac5f07a1f915248c63cf33c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
