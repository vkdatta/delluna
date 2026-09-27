export const name="lucid_2-list-clock";
export const id="dl_4b2004de5daa4a82834e";
export const url=new URL("../icons/lucid_2-list-clock.svg?v=8f5830453f849520ab72c0ea2dfdc4926349a9288bdf9ba835145819c47416b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
