export const name="chef-hat-light";
export const id="dl_3dacabe374484a38b96f";
export const url=new URL("../icons/chef-hat-light.svg?v=35454ad3edb5a3860cbdb5e0ebfa6cf3aee54853afb4cd1e13b9e6505ef86baa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
