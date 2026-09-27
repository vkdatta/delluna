export const name="clover-bold";
export const id="dl_9ea01b41aa7f43d5a3e9";
export const url=new URL("../icons/clover-bold.svg?v=eb5a822a0fe8190f765f3d31e99fb8227b9862bd2c3e1a606aeda4a788bb85a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
