export const name="microsoft-powerpoint-logo-duotone";
export const id="dl_e732b9beb4a84e479b52";
export const url=new URL("../icons/microsoft-powerpoint-logo-duotone.svg?v=57643abe4688d2342cdbc46de769dfc1c51950ad708ad246b4391081a770a3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
