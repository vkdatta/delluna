export const name="server_person-fill";
export const id="dl_b52d7ee3417b4a838c39";
export const url=new URL("../icons/S/server_person-fill.svg?v=4ed8022bbd91a82be89061caaf9812b49f5080d0d4f33f68a09d57e9a88b0b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
