export const name="placeholder-bold";
export const id="dl_ca252ce5880b447a8b96";
export const url=new URL("../icons/placeholder-bold.svg?v=c5978055043faf0b47e02ddbd9273c66f9e84671f73f1723a8efd8a27785a0e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
