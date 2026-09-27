export const name="battery-charging-fill";
export const id="dl_3ae2a5afff3e4e4abbee";
export const url=new URL("../icons/battery-charging-fill.svg?v=80d649d90858bd73c6532c670b332979b41972e85f41ebb9d065bf30c1d3fcdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
