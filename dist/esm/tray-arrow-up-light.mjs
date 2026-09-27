export const name="tray-arrow-up-light";
export const id="dl_b903a8b4482168438f48";
export const url=new URL("../icons/tray-arrow-up-light.svg?v=3956ecbafab51847903df0150235a8efbb4cf7367f44040b453c8e4f0a274c6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
