export const name="post_add";
export const id="dl_024e2e76e56c1e87ef81";
export const url=new URL("../icons/post_add.svg?v=ef33283a60029a352771925596b829f6f6c24da44a80e799a44f35b2388f64c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
