export const name="island-bold";
export const id="dl_5540819d70f4488d98d5";
export const url=new URL("../icons/island-bold.svg?v=4e3bf8203e1fe9df506677da276b5cc443d3d813b93b33a6c1287148f608ef77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
