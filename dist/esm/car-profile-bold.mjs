export const name="car-profile-bold";
export const id="dl_8ed81c06d15c4eb499cf";
export const url=new URL("../icons/car-profile-bold.svg?v=9f777fd42e55558292215a2662dce130ff8833270298aa63b85cdff46424f278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
