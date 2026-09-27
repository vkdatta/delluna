export const name="boot-bold";
export const id="dl_95eb308cbd9d4c79b03f";
export const url=new URL("../icons/boot-bold.svg?v=8916341b109100db7fd69bf45e1851b3ed622f3e143e58ea1571c9e7204c218e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
