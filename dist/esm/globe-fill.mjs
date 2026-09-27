export const name="globe-fill";
export const id="dl_02a92f72405a4a398fba";
export const url=new URL("../icons/globe-fill.svg?v=3c3052ac10fdb26c00141ed03c7e458efd195e5d67fe26d3d10b268f147b09db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
