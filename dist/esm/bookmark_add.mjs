export const name="bookmark_add";
export const id="dl_5184b6d248592e240477";
export const url=new URL("../icons/bookmark_add.svg?v=148ac28a7c675fe64b263da1c8fcec4d1030b403d8669e813267182f5a458936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
