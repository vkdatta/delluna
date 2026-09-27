export const name="communication";
export const id="dl_f5b49d22df17cf7b5be7";
export const url=new URL("../icons/communication.svg?v=d1d98a72b49735e15cbaa06ed0cdc25cb46ae8dc49852f364f41f5e0ef2204a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
