export const name="flash_on-fill";
export const id="dl_fae4110aef588933f772";
export const url=new URL("../icons/flash_on-fill.svg?v=2dfb086bbb0ebb45cd4b5fcc57ff0bcff2d9a33785abcc858854b9f624192fa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
