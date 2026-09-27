export const name="shelf_position-fill";
export const id="dl_1c287665e2d6efe520d0";
export const url=new URL("../icons/shelf_position-fill.svg?v=3fe958f9f51aca84e3dae1e8879d8529234356ebfb74f8ccdf78d78dc9311bba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
