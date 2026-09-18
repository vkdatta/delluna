export const name="logo_dev";
export const id="dl_8b5fc1893b5e4c1f83cd";
export const url=new URL("../icons/L/logo_dev.svg?v=d282a85a99e22fa78f078ecee218d1d9746ebbf52d407a96d5ded849a11b7249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
