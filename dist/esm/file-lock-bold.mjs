export const name="file-lock-bold";
export const id="dl_a31f05fe638f4b238d9b";
export const url=new URL("../icons/file-lock-bold.svg?v=82f3c626ff8c331cb2e3b535b2e293a04bb9e4a224cb3f2bb2f6869ac6bce723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
