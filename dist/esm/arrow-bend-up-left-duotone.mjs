export const name="arrow-bend-up-left-duotone";
export const id="dl_cb69ab442b1646e0a625";
export const url=new URL("../icons/arrow-bend-up-left-duotone.svg?v=065c59fa16947e67b018ffe23a90c89144c4e2a222adfd797da5f59fcda2bfb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
