export const name="functions";
export const id="dl_9e8e4297f77d6c83d23c";
export const url=new URL("../icons/material_symbols/functions.svg?v=24e6760363b24421996126ace6941a2ea95e016867aeae6b4379f8cb85650c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
