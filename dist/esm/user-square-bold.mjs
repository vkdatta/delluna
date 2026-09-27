export const name="user-square-bold";
export const id="dl_600e63869bad3ced4e82";
export const url=new URL("../icons/user-square-bold.svg?v=afe99e66bc016ac3e0588f74be41840472f9631a57ef100894365a19a03ff69c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
