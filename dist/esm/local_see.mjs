export const name="local_see";
export const id="dl_9f5bda09d76f61c3d312";
export const url=new URL("../icons/local_see.svg?v=ad74a1fe9316782cbec313f247887f8d84714df34c7e5ea74b88a3ee6abcf6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
