export const name="24fps_select";
export const id="dl_61a74bbd47b09dad84a4";
export const url=new URL("../icons/24fps_select.svg?v=4f7d59563f464483d278bf137647b96318e432881c2c7dd754ddf5054e10e064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
