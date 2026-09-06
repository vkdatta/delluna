export const name="car-profile-bold";
export const id="dl_8ed81c06d15c4eb499cf";
export const url=new URL("../icons/car-profile-bold.svg?v=26abac12e25b6f2c99e876f955abef4ee69e97807cb036fada082f28eaa6bf79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
