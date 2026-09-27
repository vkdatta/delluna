export const name="lucid_1-arrow-big-right-dash";
export const id="dl_eae131305fdd4d4e9a23";
export const url=new URL("../icons/lucid_1-arrow-big-right-dash.svg?v=47b9810693f945d25935392fab297473a48cbd451c44f4f747e5642533eb6447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
