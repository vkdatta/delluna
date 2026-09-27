export const name="atom-light";
export const id="dl_07d46c20a6654c0c9a24";
export const url=new URL("../icons/atom-light.svg?v=ad3104a2f354fd416d9ebed990e2d52b43b9a91b78d992fc75011d6d8f41a5ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
