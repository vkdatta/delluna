export const name="box-fill";
export const id="dl_b7e1af4b43c34411c87d";
export const url=new URL("../icons/box-fill.svg?v=2ad5d41854f2c64c687a936a4334c4ec37a80e3735034b0ac384adf0fa87a2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
