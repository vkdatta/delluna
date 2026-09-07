export const name="log-light";
export const id="dl_92c4d40372544b43a9f3";
export const url=new URL("../icons/log-light.svg?v=fa6e215f248b9f6fbe4621d15b23c121442087bcae9d9f5fc9c4079828df1f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
