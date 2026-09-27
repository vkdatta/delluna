export const name="swatch-book";
export const id="dl_383d3051f2a54f5dac27";
export const url=new URL("../icons/swatch-book.svg?v=971fb691f5dfed60079c1b855155e9a4e89ce695f3b1f04beec948cf69694b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
