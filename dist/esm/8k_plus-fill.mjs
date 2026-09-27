export const name="8k_plus-fill";
export const id="dl_01a54b71613798c18cf5";
export const url=new URL("../icons/8k_plus-fill.svg?v=73ad59192afdd408c25e3175ade80c5d1e791c5db5b2cb57e144dc9444e219ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
