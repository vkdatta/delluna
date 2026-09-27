export const name="stylus_laser_pointer-fill";
export const id="dl_7803ea7699d04f97637c";
export const url=new URL("../icons/stylus_laser_pointer-fill.svg?v=561406471c4b9329b34aa7c107f64fd85ba35d90335c48cc99ebbde50e05afef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
