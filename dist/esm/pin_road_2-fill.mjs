export const name="pin_road_2-fill";
export const id="dl_fc8a5d5b3b84a9641f29";
export const url=new URL("../icons/pin_road_2-fill.svg?v=897241cd82f7ed5d9eb73c90b46efadc6102b5278b4967d575d9d121ec604e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
