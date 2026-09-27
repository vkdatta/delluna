export const name="garage_door_open-fill";
export const id="dl_c0f137a3acb94ad66e15";
export const url=new URL("../icons/garage_door_open-fill.svg?v=565f99d156db011ab84330162eb825434ea5e683b8f233df3d84e66d1fdf8ae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
