export const name="lucid_3-power-off";
export const id="dl_6ef97cd918904f358bca";
export const url=new URL("../icons/lucid_3-power-off.svg?v=ac7588a2d8ff3d718fafb6198e43f51c1fa61abf10d3b442c9cf3560d71e4050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
