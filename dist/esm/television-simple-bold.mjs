export const name="television-simple-bold";
export const id="dl_0a5c2d2a75f47d704c5e";
export const url=new URL("../icons/television-simple-bold.svg?v=d5768a75d43e2f7ac66abc51e5338efab04a0dc13e3e874635d39e4d2b27d24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
