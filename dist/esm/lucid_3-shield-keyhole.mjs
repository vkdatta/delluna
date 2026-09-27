export const name="lucid_3-shield-keyhole";
export const id="dl_1b13002b8b984924a3ba";
export const url=new URL("../icons/lucid_3-shield-keyhole.svg?v=4f64135da23c2d95c3bf6403f1cbe78d7b3bd4f8108dc5b781f2dcfc2a28f35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
