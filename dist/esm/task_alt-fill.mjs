export const name="task_alt-fill";
export const id="dl_61dfcb6ac0cc2f075f23";
export const url=new URL("../icons/task_alt-fill.svg?v=157023a979dd4bd581a163db4f645bf8313ab44e06e2f96137199b38ebb80c1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
