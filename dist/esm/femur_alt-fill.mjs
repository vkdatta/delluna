export const name="femur_alt-fill";
export const id="dl_3b8e7fad2c12c1974d1d";
export const url=new URL("../icons/femur_alt-fill.svg?v=0fcc9af8634722a4b21974731d3f9ad8ba16fbe3e476272baa09290727c1c44f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
