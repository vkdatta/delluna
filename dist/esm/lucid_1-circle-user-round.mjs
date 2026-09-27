export const name="lucid_1-circle-user-round";
export const id="dl_581158a55b3140f6a88f";
export const url=new URL("../icons/lucid_1-circle-user-round.svg?v=e01a15effd16dcf0a3d5dbfd8b3855606b26efbe37973b86656c13f5bc59023d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
