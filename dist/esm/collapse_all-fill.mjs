export const name="collapse_all-fill";
export const id="dl_baf36cbd1dcd9b686394";
export const url=new URL("../icons/collapse_all-fill.svg?v=8a06835d852f62e2654fc51a73b9ed12bd68eee8d6e624de96d683fcb1524775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
