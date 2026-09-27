export const name="grid_off";
export const id="dl_ef956439797ed6709f1e";
export const url=new URL("../icons/grid_off.svg?v=458b21a342ee94f975f874c33db84500fcf892d4751e1646426fd505a4efd112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
