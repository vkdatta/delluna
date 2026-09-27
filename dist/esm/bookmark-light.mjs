export const name="bookmark-light";
export const id="dl_3336e74aff834c2ebb0f";
export const url=new URL("../icons/bookmark-light.svg?v=75940e2a1181b023d52b197dbbe73a570792903313384f5566817894c8b435ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
