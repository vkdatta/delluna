export const name="azm-fill";
export const id="dl_b451dda59998e9c14c12";
export const url=new URL("../icons/azm-fill.svg?v=0045eb4099a65ad8e4688939b74b2cdbc8ae24a1c3f21e92de0d9680f3ecc3f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
