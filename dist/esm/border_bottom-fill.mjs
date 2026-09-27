export const name="border_bottom-fill";
export const id="dl_a6124669e56d33380d71";
export const url=new URL("../icons/border_bottom-fill.svg?v=076632127a8c54d01609034df5c96b7521a2094d204224202edffe57b35245a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
