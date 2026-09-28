export const name="assured_workload-fill";
export const id="dl_d08d1c1240e511e89969";
export const url=new URL("../icons/assured_workload-fill.svg?v=fa352037a3609f9b84cf5fa3e15e9acb9d3c37141f7dded04fc362d435da65e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
