export const name="urology";
export const id="dl_90d0acd28819021a0634";
export const url=new URL("../icons/urology.svg?v=eb9f4915f744071365757ce6ceed191dd17de0881111e32ed07643ac4f0f1714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
