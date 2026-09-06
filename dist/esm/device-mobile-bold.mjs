export const name="device-mobile-bold";
export const id="dl_5a23d11b4f624a4ca603";
export const url=new URL("../icons/device-mobile-bold.svg?v=77a4a5ebcba16e37637e700381bc3858b92c9350730ecf1e207f5f40d524de03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
