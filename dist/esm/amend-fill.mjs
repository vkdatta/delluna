export const name="amend-fill";
export const id="dl_68fe284e18487633e231";
export const url=new URL("../icons/amend-fill.svg?v=0097420216e2d97bb641c862f5adf979934606383b9e4633ff3efbae6e8febc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
