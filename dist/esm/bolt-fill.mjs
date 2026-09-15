export const name="bolt-fill";
export const id="dl_70a62e700ea64e8aa263";
export const url=new URL("../icons/B/bolt-fill.svg?v=d67d92893e61b13ef071b74f5774e159d5e9802909faa6c8f3f15962effd79c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
