export const name="not_accessible-fill";
export const id="dl_9e41e1b35f57759c2652";
export const url=new URL("../icons/not_accessible-fill.svg?v=631e83b8586d4eb9b1ef44c916bb41d356252a0910c0302ef32a6a610b726f5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
