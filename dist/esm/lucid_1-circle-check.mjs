export const name="lucid_1-circle-check";
export const id="dl_2b215fc0f3404fa09fd5";
export const url=new URL("../icons/lucid_1-circle-check.svg?v=e0f11de3b085e6a591bf1e081603c91c25539719ee0480ead8a5a2d7497ee0d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
