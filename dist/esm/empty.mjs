export const name="empty";
export const id="dl_826e56c3578549ad88fe";
export const url=new URL("../icons/empty.svg?v=0c3aebb9242bd310b71030a72ba39b1c28e88ab9eff3419b8e3a2bc9d4351334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
