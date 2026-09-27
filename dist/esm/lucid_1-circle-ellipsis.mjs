export const name="lucid_1-circle-ellipsis";
export const id="dl_571c3514039442dc82f8";
export const url=new URL("../icons/lucid_1-circle-ellipsis.svg?v=de8815c3d95fa2f2ad4aeea9eecf5a0f552f520b63818f93aad1f71f36d61830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
