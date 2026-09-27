export const name="crop_16_9-fill";
export const id="dl_2d45b64918684d8ed31d";
export const url=new URL("../icons/crop_16_9-fill.svg?v=69c882bbd03bc4832521dbb32f04fa8d3d1d67cb7fb2f39930f9f5673a2cbad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
