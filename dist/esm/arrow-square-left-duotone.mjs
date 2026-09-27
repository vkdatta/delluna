export const name="arrow-square-left-duotone";
export const id="dl_c96aeb52a4be49519b57";
export const url=new URL("../icons/arrow-square-left-duotone.svg?v=38973391618d07e5738de4a38cfa6d7780d4dceaa219def80c67dccaee430858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
