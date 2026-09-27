export const name="post_add-fill";
export const id="dl_1e096dd268dce95031c4";
export const url=new URL("../icons/post_add-fill.svg?v=2078489fe0b9ea7ed26864563afd340f61854aec005662127b974b6f446b02c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
