export const name="splitscreen_landscape_add-fill";
export const id="dl_db1e45e64e704282866b";
export const url=new URL("../icons/splitscreen_landscape_add-fill.svg?v=d93ec0f558c1f7936c9f4459c371fd79b77c9f56bee5fe9ec20ac84d4cc0b3f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
