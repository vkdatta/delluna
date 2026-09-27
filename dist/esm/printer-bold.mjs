export const name="printer-bold";
export const id="dl_d7eb35a7e08a472a94a4";
export const url=new URL("../icons/printer-bold.svg?v=c9813f19e49076494f979e34e03ff0b046f5216babcfc8b037127baf7fac2585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
