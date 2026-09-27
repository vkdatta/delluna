export const name="swipe_up";
export const id="dl_c1ee15058e44b6314937";
export const url=new URL("../icons/swipe_up.svg?v=0efd91b31655df4100f4f151e91cdebf024a8e8cbcdb1b64778e535aeb9d4329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
