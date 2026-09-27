export const name="sidebar-simple-duotone";
export const id="dl_667840d8507d7e4d75f6";
export const url=new URL("../icons/sidebar-simple-duotone.svg?v=bc1a22500072cfb761015eb28dc536f96a9767543da710f85a4d8a42a7abc910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
