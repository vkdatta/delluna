export const name="bus_railway-fill";
export const id="dl_8447c46014c0304342cb";
export const url=new URL("../icons/bus_railway-fill.svg?v=1f098dfc91f2a674b097e56ffa1335492c5240af99f25841293c5f2829bff796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
