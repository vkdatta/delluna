export const name="unlink";
export const id="dl_c8c37666da3c44e3919f";
export const url=new URL("../icons/unlink.svg?v=a23db05984646fb05fa543b4885f875fc21a035d58f6f7f87db2e6292266a3b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
