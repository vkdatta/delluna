export const name="add_task-fill";
export const id="dl_0031a681e8296f05a21b";
export const url=new URL("../icons/add_task-fill.svg?v=a8b2f0969daf439f0158ad7035faefcb71c1698df07aac4e595fd3d416388f09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
