export const name="lucid_3-paintbrush-vertical";
export const id="dl_0b28e2804ecd4559a8d1";
export const url=new URL("../icons/lucid_3-paintbrush-vertical.svg?v=25d316e45f61d44ed51970c3de1a7aeaf09566823653bad1ac6471a797deb672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
