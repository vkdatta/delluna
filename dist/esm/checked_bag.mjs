export const name="checked_bag";
export const id="dl_b225cfef811db660890a";
export const url=new URL("../icons/checked_bag.svg?v=8dd1f93fdd97ecf6e901a8a80b2556aa8a778b3c965d516da8d7097598ae3096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
