export const name="plus-square-bold";
export const id="dl_c0ef2cd6834c4ae1a2c4";
export const url=new URL("../icons/plus-square-bold.svg?v=cc7a13f8e32eb935f6a7a13d9cd233841a0595d4b8f6f38ae999b9002e39583b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
