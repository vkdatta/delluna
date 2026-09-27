export const name="steps";
export const id="dl_9a7b6a7a67bfe1444c7a";
export const url=new URL("../icons/steps.svg?v=e9de0c487249e018956a97a1c5befdbbb65199a072f32bdbba560900d205bb50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
