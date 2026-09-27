export const name="users-four-bold";
export const id="dl_3d5d4fbf25879796f83c";
export const url=new URL("../icons/users-four-bold.svg?v=a8cae340a326cc632e7b3848e739482210daba12f66118a584e92847d427ecd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
