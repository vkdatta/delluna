export const name="grid_view";
export const id="dl_d4d6c1a3d9dca7fcda82";
export const url=new URL("../icons/grid_view.svg?v=b03073a6156fce75193a153405ed3bfd68177938284360deeb50139ae293718b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
