export const name="caret-line-down-light";
export const id="dl_388416dca2bd4c01b9c5";
export const url=new URL("../icons/caret-line-down-light.svg?v=2b35dd93411226afa33519a7ffa58da7568d8e76b1d6bf3a402d76d1f22319f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
