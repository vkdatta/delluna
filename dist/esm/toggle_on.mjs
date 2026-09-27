export const name="toggle_on";
export const id="dl_cc9928d6d27fbf8155a6";
export const url=new URL("../icons/toggle_on.svg?v=0f15d512cf4d5866bf5ecee90c8011db20629cbbf74cdf7b5f4f525eb174f68b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
