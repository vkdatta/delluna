export const name="filter_vintage";
export const id="dl_4098138281ab4b39b46b";
export const url=new URL("../icons/F/filter_vintage.svg?v=de0f6e398c4146e994c2928d9e285fe5eb70a313e4bf4205771f3535cc44b6b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
