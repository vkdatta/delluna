export const name="building-apartment";
export const id="dl_0d708e9c47ad48b4a7a7";
export const url=new URL("../icons/building-apartment.svg?v=20bb4acdd008c19ec627fa89b8cf2d5f7a53c96cc4a5415ec181eddaa974aa68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
