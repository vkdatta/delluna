export const name="credit-card-bold";
export const id="dl_abe7ca05106f47e68ee5";
export const url=new URL("../icons/credit-card-bold.svg?v=f86284ed4af0aca670efacbe1cd0835c042c6cd2a6e25010f7b7dc7c406228d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
