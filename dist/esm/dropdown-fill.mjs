export const name="dropdown-fill";
export const id="dl_eb108000ec0373100204";
export const url=new URL("../icons/dropdown-fill.svg?v=84b4d9ce56c8bc676d48d07883adb1338f4136e4c8632cbca3c654e14903197c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
