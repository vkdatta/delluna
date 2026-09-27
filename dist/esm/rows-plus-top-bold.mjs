export const name="rows-plus-top-bold";
export const id="dl_bd19a45262464df0b41f";
export const url=new URL("../icons/rows-plus-top-bold.svg?v=6abff0a5d17a1b16a3199d0b3dbae678e076a86422cf2beeef513dd5c242cde1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
