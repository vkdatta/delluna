export const name="cadence-fill";
export const id="dl_677cd19fbbc35f6e841f";
export const url=new URL("../icons/cadence-fill.svg?v=27f827b3f43572525ab91f1cda6c1c046455109bab6eedd8f8dd5d6182ed5739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
