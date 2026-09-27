export const name="ungroup";
export const id="dl_0bfcc4db382e4d588cdb";
export const url=new URL("../icons/ungroup.svg?v=e813fd5bc8dc969c031772d92260b9f0ccb012bfd1dd6a949f73c3034987adc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
