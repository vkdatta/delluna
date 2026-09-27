export const name="density_medium-fill";
export const id="dl_39dda1e426e2ce4579d3";
export const url=new URL("../icons/density_medium-fill.svg?v=8ba7ecf1f9270290aca2d0accc7173faedaf1a99169b76f02397837b6ee9de9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
