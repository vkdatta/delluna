export const name="no_sim-fill";
export const id="dl_508508c5a6ee2e08242d";
export const url=new URL("../icons/no_sim-fill.svg?v=972ed8334d40679c8e3d703bde8dd5e3ddce584745b2f932b8369b4da6a2644c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
