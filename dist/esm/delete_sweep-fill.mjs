export const name="delete_sweep-fill";
export const id="dl_384a7b5f60684aaf9d6d";
export const url=new URL("../icons/D/delete_sweep-fill.svg?v=eefc0fa1918cf37c6554e479151ff6171b020878ec78226d2da7e00f5c38e593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
