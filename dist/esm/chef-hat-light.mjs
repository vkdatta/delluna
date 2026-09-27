export const name="chef-hat-light";
export const id="dl_3dacabe374484a38b96f";
export const url=new URL("../icons/chef-hat-light.svg?v=6078ce06d4c14ac4a95b5325a0a452b7fd3287593ae8a1991bb235ac159b7618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
