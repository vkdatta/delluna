export const name="tag-chevron";
export const id="dl_428b3c2938b69fc2e38a";
export const url=new URL("../icons/tag-chevron.svg?v=5f9f8c6bd3ffc4ccf688076d24cf0e47b8fcb44a91fdde0b83283be823b36f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
