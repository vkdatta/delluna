export const name="speaker-simple-high-fill";
export const id="dl_a59fa0fe3da8b3a06673";
export const url=new URL("../icons/speaker-simple-high-fill.svg?v=5db62cfe4601b1ce9cdf454c3d7ba2181c3cc5da32b2920579bb1effbac41481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
