export const name="ulna_radius_alt-fill";
export const id="dl_3afafdc9cdd385e53243";
export const url=new URL("../icons/ulna_radius_alt-fill.svg?v=0eaaba4b6fe1ebee63e08b1c109e3e704bca853f3aaacfd95553e5d794005232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
