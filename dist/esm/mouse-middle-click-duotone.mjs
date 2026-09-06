export const name="mouse-middle-click-duotone";
export const id="dl_9bacb1877187429b9189";
export const url=new URL("../icons/mouse-middle-click-duotone.svg?v=1e4a3a802be20f06741c7642229dcf6d2d029bc59516646e2c5554688cf05081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
