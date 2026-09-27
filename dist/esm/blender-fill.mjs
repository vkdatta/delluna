export const name="blender-fill";
export const id="dl_566bac02870c02dbc0f1";
export const url=new URL("../icons/blender-fill.svg?v=5424f9fb8ee53c41eb0d68ea70cfc47bd2e5fea06071f1fc4d0114a4c66fdce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
