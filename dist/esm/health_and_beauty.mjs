export const name="health_and_beauty";
export const id="dl_23afb345466ddc654b1e";
export const url=new URL("../icons/health_and_beauty.svg?v=3f90986a183eeb3d6f5f439ef97be11ddf36f8c79b57a90650188ab0923c28bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
