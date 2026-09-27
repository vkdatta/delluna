export const name="table-cells-split";
export const id="dl_1dbd3f89ae8a466e808c";
export const url=new URL("../icons/table-cells-split.svg?v=fa5062d4a5889ea1f804cab9ad811befd9da90bf6b2f93599d3104aac010d55f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
