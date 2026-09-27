export const name="view_object_track-fill";
export const id="dl_bc5871a85c78b9e527ef";
export const url=new URL("../icons/view_object_track-fill.svg?v=e766e2d62865cdfe509e061872ffe5d7af0b0511c68a846f489c5915f7a94b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
