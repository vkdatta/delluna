export const name="fullscreen_portrait-fill";
export const id="dl_5728aee668f447be9e92";
export const url=new URL("../icons/fullscreen_portrait-fill.svg?v=847746a8bbcbdd9c4377f5ca20917e66ffab2ca8beb2624789c0f5a8e1d88e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
