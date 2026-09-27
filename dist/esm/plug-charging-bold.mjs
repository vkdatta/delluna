export const name="plug-charging-bold";
export const id="dl_49e9b8e482ac4586ba76";
export const url=new URL("../icons/plug-charging-bold.svg?v=1d11e269115fd579c1d4ad6715cb22befa999c7e775f903a22785714dd8be281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
