export const name="nest_multi_room-fill";
export const id="dl_97d52358df666b092417";
export const url=new URL("../icons/nest_multi_room-fill.svg?v=20107af190b2f2da0871f75a6b00abadbe6913aa0d0db01fc3ee1826b032b6fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
