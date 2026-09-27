export const name="newsstand-fill";
export const id="dl_91deeeeb4901b01815ba";
export const url=new URL("../icons/newsstand-fill.svg?v=e02ed233aa87e5f3d98b0f3c6dcc3ba61d766dc46b9e1df47c0b0f66cf861b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
