export const name="variables-fill";
export const id="dl_01c709eb20cd4e0d5463";
export const url=new URL("../icons/variables-fill.svg?v=cf04cf0bc7f818a65af42b72d9e2cb9c61c5f1cf6740bad0afd818e9318c8246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
