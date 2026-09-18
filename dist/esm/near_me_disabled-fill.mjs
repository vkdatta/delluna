export const name="near_me_disabled-fill";
export const id="dl_0ab970dea36a4f709b27";
export const url=new URL("../icons/N/near_me_disabled-fill.svg?v=41fbbbcd5b4a794c36d65dabc766112dad9c4d5b521146f789a44e60000bf73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
