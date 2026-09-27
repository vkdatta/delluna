export const name="lucid_1-coffee";
export const id="dl_60f61d3dd6d049908cfc";
export const url=new URL("../icons/lucid_1-coffee.svg?v=831555c1eff78ab3a5319892a18d338ea2fbb50f900243657d8b6583ef38c1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
