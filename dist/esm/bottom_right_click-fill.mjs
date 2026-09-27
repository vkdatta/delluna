export const name="bottom_right_click-fill";
export const id="dl_9dc56d2b9307061798cc";
export const url=new URL("../icons/bottom_right_click-fill.svg?v=932163bf1ac6f34acbf4a6344966c607f73365732f9da1986e37dd8322c21dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
