export const name="push-pin-duotone";
export const id="dl_31a21606006a49d4a50e";
export const url=new URL("../icons/push-pin-duotone.svg?v=8cb5196c792ece641b01fa1b0749aa1419f54a58d54a88b92e5351870bf2078e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
