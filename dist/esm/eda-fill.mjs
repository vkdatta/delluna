export const name="eda-fill";
export const id="dl_434ca67a91da4a1f082e";
export const url=new URL("../icons/eda-fill.svg?v=d5a5bc7e1b4ecaf3ea3fad41ccdf7ee44333bf9460ab7751cb3e14821d4d3141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
