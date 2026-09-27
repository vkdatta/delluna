export const name="number-square-three-bold";
export const id="dl_b4551b19875048c1a6c3";
export const url=new URL("../icons/number-square-three-bold.svg?v=e40352e7883d58eac0444c329e016f3a918d0784e2fb1a026f30143ec8aeb313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
