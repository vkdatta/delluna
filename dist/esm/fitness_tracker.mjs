export const name="fitness_tracker";
export const id="dl_34c2a19aa7d1f0be9901";
export const url=new URL("../icons/fitness_tracker.svg?v=c39a8ceac072eade7dc2b42b288a92be1baf99f8d01f967f4b7748447881e346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
