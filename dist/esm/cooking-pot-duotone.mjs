export const name="cooking-pot-duotone";
export const id="dl_2bb9e6a9305b45cf9c3d";
export const url=new URL("../icons/cooking-pot-duotone.svg?v=2b8cde131a642ebf132df69a11f86d2f9f225634eea6097687d31487886616f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
