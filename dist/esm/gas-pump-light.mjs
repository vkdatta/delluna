export const name="gas-pump-light";
export const id="dl_0c1090a35d9745ccb67a";
export const url=new URL("../icons/gas-pump-light.svg?v=2b61a4cd30fdbc6b3e63ee3d0d93939f6087f3a10b66909ec9f7d711f831eeaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
