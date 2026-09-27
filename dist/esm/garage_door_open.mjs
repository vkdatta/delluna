export const name="garage_door_open";
export const id="dl_1ba5707f799f8ea8acf0";
export const url=new URL("../icons/garage_door_open.svg?v=257039cc9edfee55efff6db321e9af010f9337f4ded49bae310b588029919c24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
