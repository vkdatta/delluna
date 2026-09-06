export const name="car-profile-fill";
export const id="dl_9268c29c333344c49133";
export const url=new URL("../icons/car-profile-fill.svg?v=d669428d207dc536ca0a334dad7375c911569b7c92fe30d165002da78cedafcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
