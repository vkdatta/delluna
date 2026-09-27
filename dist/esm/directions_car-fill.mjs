export const name="directions_car-fill";
export const id="dl_8ba2e07a67f766622268";
export const url=new URL("../icons/directions_car-fill.svg?v=59ce66aa98e8e3baeb4b348df50123eaacb84badd7c7e1d8af3d02ce76c0d0ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
