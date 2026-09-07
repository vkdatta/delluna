export const name="subway-fill";
export const id="dl_e29d1df79e774566b881";
export const url=new URL("../icons/S/subway-fill.svg?v=91b7c82977673ca61be9c69420803e87622bf8660094920fde2585b87273134f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
