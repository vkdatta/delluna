export const name="reset_shutter_speed-fill";
export const id="dl_97ecaba58a02a5a1ba76";
export const url=new URL("../icons/reset_shutter_speed-fill.svg?v=0fa707144ea238b28f23106669c9fb0b83d9951e961c21d067bba8f19ea07246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
