export const name="wheelchair-motion-fill";
export const id="dl_d51c9476182c424d8e88";
export const url=new URL("../icons/W/wheelchair-motion-fill.svg?v=3504c025e96f7809ee8540be3a0271106f8451da0b9d351b9e3d8f93166615d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
