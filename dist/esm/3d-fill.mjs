export const name="3d-fill";
export const id="dl_dd7dc47f4233f3b310bd";
export const url=new URL("../icons/3d-fill.svg?v=7384b832f9cbb193109a40fac462f5c60571e54caeb6d57baa9a0103f2d297d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
