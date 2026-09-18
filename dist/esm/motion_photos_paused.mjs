export const name="motion_photos_paused";
export const id="dl_24e2de27a33946928bbf";
export const url=new URL("../icons/M/motion_photos_paused.svg?v=9237014f9dcfb0ada720a4a8f7b03f457e61ae4d4d302241bcbd7263d4d965d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
