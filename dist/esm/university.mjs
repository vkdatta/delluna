export const name="university";
export const id="dl_d27b5dba7ecb4ede9ebe";
export const url=new URL("../icons/university.svg?v=48424f460fac4f9c04cab0d0af1cc80adb762eea17b4a6b1cd1b693c5e5e99a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
