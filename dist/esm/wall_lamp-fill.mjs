export const name="wall_lamp-fill";
export const id="dl_fb65837fcea0bf9d7fb2";
export const url=new URL("../icons/wall_lamp-fill.svg?v=0be00c73233d1f27a9ac80d6de5c06a7bbefac9a1c150e3e96fbff7307fd6a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
