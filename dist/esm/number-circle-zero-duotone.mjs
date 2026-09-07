export const name="number-circle-zero-duotone";
export const id="dl_3b74d99aa19e4b4c9e66";
export const url=new URL("../icons/number-circle-zero-duotone.svg?v=e4ae953188a91b71e01e1400a01f56f7d104e6d1a9c55115a2acb1735e7a698c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
