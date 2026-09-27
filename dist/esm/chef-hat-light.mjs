export const name="chef-hat-light";
export const id="dl_3dacabe374484a38b96f";
export const url=new URL("../icons/chef-hat-light.svg?v=ca26c85fcd9e7aa5b2877661e362e5bfcf7d497aeeb13804ff90934fefd210da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
