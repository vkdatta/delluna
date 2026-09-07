export const name="sigma-light";
export const id="dl_f947bcb734924c5bafb7";
export const url=new URL("../icons/S/sigma-light.svg?v=1ed34ca2b29a8342226508987f59e646dee05f2a10bdd1e2c267fe6a9fc113f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
