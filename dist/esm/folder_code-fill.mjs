export const name="folder_code-fill";
export const id="dl_bbd21fa5d2f14e6a8921";
export const url=new URL("../icons/F/folder_code-fill.svg?v=f83566335448154d444265f4530b3b43ca03b431e206da1871e5867413603634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
