export const name="faders-horizontal-bold";
export const id="dl_ab3d6953b92a4d459f8d";
export const url=new URL("../icons/faders-horizontal-bold.svg?v=fcf75ac107192d2c2a618e379b31a45791f5d4cffa769078ee0d059f3c2df5fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
