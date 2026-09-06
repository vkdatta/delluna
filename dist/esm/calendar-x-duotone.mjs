export const name="calendar-x-duotone";
export const id="dl_f8a9e837807148858d8b";
export const url=new URL("../icons/calendar-x-duotone.svg?v=2de4d505d31bffa41c0a7e0edba9d0d994c97a4f9891a1e0ce303e0ce9fd85c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
