export const name="lucid_1-bike";
export const id="dl_3d2a3a2ff05f4eed8394";
export const url=new URL("../icons/lucid_1-bike.svg?v=f9f2fe4e1f5ca76037950dcc618004d6b0b3aa1b9368cfb0ddfc081941f826fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
