export const name="electrical_services-fill";
export const id="dl_e5f76a5aa31ebdc72163";
export const url=new URL("../icons/electrical_services-fill.svg?v=3ca1b2d532d03605f44c519d67f0a8dc376874194d8bda1a44ee0f27350220fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
