export const name="airplane-bold";
export const id="dl_e631f9431bad4e4eb599";
export const url=new URL("../icons/airplane-bold.svg?v=92de6a7a78491b5429470358a0622c1e15dc9132a2c97de65a9a518feae7da58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
