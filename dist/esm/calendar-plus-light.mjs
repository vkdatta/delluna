export const name="calendar-plus-light";
export const id="dl_3d5a4e7f02fc4c03acdd";
export const url=new URL("../icons/calendar-plus-light.svg?v=dd00db12d68f0f31bd6964e3becf3574384a99d12d591246523da4cbbf18774d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
