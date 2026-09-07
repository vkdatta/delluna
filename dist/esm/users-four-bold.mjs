export const name="users-four-bold";
export const id="dl_b2179c0fb4184f6ba86b";
export const url=new URL("../icons/U/users-four-bold.svg?v=1ba167573a02e04ef09d43179145cc1e2236792176f915b93e6d1e85d5fc5a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
