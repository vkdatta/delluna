export const name="arrows-out-simple-light";
export const id="dl_37655120ce6847459174";
export const url=new URL("../icons/arrows-out-simple-light.svg?v=0ab3d8006f5f2d907c5e4fd5aa8bbb3a8c92d05ef5ee8329ba6a27961cfef6ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
