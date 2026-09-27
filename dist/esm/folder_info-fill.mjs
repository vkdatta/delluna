export const name="folder_info-fill";
export const id="dl_50de43d4188b2ffee190";
export const url=new URL("../icons/folder_info-fill.svg?v=2f94325e956954c8e0c80d5b23f4d970ad7f6b88bf61c9bab71df0ac76bbcd50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
