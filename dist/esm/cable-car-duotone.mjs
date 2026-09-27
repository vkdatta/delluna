export const name="cable-car-duotone";
export const id="dl_3856b93396a046cdbb09";
export const url=new URL("../icons/cable-car-duotone.svg?v=a1d5c78874c90bf44bdc2d3c0a53cf0cc2996c4aabe1311fadf1b24839d2250a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
