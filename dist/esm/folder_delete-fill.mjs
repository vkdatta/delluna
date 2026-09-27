export const name="folder_delete-fill";
export const id="dl_1d738a486b6d4490e245";
export const url=new URL("../icons/folder_delete-fill.svg?v=eb534d31434a3b7df01112cf1658ed7c498d4593b7c6ca8f34cc5c6b7e1bd685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
