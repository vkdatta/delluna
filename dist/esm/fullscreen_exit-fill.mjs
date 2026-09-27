export const name="fullscreen_exit-fill";
export const id="dl_a365229f37273d077935";
export const url=new URL("../icons/fullscreen_exit-fill.svg?v=54b2d2e59dbdee5dc1722d537ce7bbdbe8e64e989954757700070d8ce04fad76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
