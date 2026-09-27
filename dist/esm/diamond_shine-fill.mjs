export const name="diamond_shine-fill";
export const id="dl_410b3f860d13ea03bcb6";
export const url=new URL("../icons/diamond_shine-fill.svg?v=daf2fd39a7cf0bec610edf8dc5b01c06206c43760358546c74212bb9282192c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
