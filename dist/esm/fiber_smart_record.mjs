export const name="fiber_smart_record";
export const id="dl_db5d118e67a0542a8ddb";
export const url=new URL("../icons/fiber_smart_record.svg?v=3b3b733ad2d35a98dbac87fc212a92af4fec3d0828e3e07fc754d3e843edd509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
