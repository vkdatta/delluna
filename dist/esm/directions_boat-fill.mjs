export const name="directions_boat-fill";
export const id="dl_a9b54673dda058230f40";
export const url=new URL("../icons/directions_boat-fill.svg?v=35f14efe8260f7cc518c616b336d6832159fd645976c90a506d9da72820480c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
