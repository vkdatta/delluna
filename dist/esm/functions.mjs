export const name="functions";
export const id="dl_606b870be5de57e8865b";
export const url=new URL("../icons/material_symbols/functions.svg?v=1de5ab5ccdcfcd2f588c0b8e455a5a05e36993544e54aaa589cef6cb17cc32c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
