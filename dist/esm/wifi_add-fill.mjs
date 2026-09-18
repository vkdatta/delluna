export const name="wifi_add-fill";
export const id="dl_a1c1a8987ee64834b268";
export const url=new URL("../icons/W/wifi_add-fill.svg?v=aaef06d6cc98c160a682a35916e95ebd4ffc791b44fe1d044ff19e897525f3a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
