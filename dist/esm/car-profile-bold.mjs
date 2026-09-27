export const name="car-profile-bold";
export const id="dl_8ed81c06d15c4eb499cf";
export const url=new URL("../icons/car-profile-bold.svg?v=f1d9e8f930420b40ce5c883316dc5f9459ec4df12f2cda16b1b59468c3d79c25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
