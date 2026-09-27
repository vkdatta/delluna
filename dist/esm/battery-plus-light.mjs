export const name="battery-plus-light";
export const id="dl_552c786ca7eb4b60884b";
export const url=new URL("../icons/battery-plus-light.svg?v=7fa90830c6be2b5125cc15a2f4337a58e092db018aa12e661f1ef6bc72aad75d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
