export const name="users-four";
export const id="dl_b93b9618600b41abb3d3";
export const url=new URL("../icons/U/users-four.svg?v=30dd9b3962b61f807bb62792f3efbc69fa05d426f96ed92ef072a0a2bc805432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
