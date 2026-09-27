export const name="home_storage-fill";
export const id="dl_1f5252236a10bd234889";
export const url=new URL("../icons/home_storage-fill.svg?v=0c83a9564fffe38d8604001e321ff94b621bc7358b82c348bf9ad85825c8dd45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
