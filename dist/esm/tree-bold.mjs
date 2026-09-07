export const name="tree-bold";
export const id="dl_c5341111eaa543caab9b";
export const url=new URL("../icons/T/tree-bold.svg?v=3d18a354856a8fabb90ca07a3cd65ad5005b6b88d54cd6dcc53c70de62977081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
