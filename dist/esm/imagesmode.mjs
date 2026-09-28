export const name="imagesmode";
export const id="dl_06e7827773809a4e48ac";
export const url=new URL("../icons/imagesmode.svg?v=53b24f2becbe5b987130509680a463ec895580288ac7b796b927ecb81923ad5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
