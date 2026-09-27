export const name="arrows-left-right";
export const id="dl_1264da9a0b934e868ae9";
export const url=new URL("../icons/arrows-left-right.svg?v=2e62a5a529c01efb24e86a26652093661e62204156c750656824fda175b8c510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
