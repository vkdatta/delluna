export const name="lucid_3-phone-outgoing";
export const id="dl_d8502541c20f4129ae13";
export const url=new URL("../icons/lucid_3-phone-outgoing.svg?v=40cf91c4a68ce6432800db68549c8e4448da0e8f1a28a1b3fdbe07bbcce7d9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
