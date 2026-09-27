export const name="assistant_direction-fill";
export const id="dl_29d8b6541ad18ba82211";
export const url=new URL("../icons/assistant_direction-fill.svg?v=ed7feb3f7e31e73539e0c70c64cf2d588a3df5e89085dc061f4f0943daff7e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
