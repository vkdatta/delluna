export const name="pinterest-logo";
export const id="dl_1e9518053712466eae90";
export const url=new URL("../icons/pinterest-logo.svg?v=c82ba79555068ba5f4f146fd6ab2256d0c14a154be15c31191e48563bd795de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
