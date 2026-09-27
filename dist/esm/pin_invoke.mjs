export const name="pin_invoke";
export const id="dl_4c33e8b094616338083f";
export const url=new URL("../icons/pin_invoke.svg?v=7c5d13dc15cda8243131195cbf895039c38d8db422ad27412e68e4083ebd0f90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
