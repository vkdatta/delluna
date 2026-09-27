export const name="user-circle-plus-light";
export const id="dl_6fde63ee701d7b4d4ef8";
export const url=new URL("../icons/user-circle-plus-light.svg?v=531f152f8461ae554d335595a8c97dab50a18f0372d30669650b5d9f5c0fdae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
