export const name="id_card-fill";
export const id="dl_2151d7e223fe4a2dd4a7";
export const url=new URL("../icons/id_card-fill.svg?v=c15158aa9fb08fc9406f9f8fe29b5beddfad037abc439f9f0dad36f7a86052ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
