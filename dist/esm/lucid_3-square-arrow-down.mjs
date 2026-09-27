export const name="lucid_3-square-arrow-down";
export const id="dl_62d1fcacb07745908f71";
export const url=new URL("../icons/lucid_3-square-arrow-down.svg?v=e9f4eb9e600126ebaec1b2b16440c02c1ccc62cd8c9ba78ef6fbca6f1d4ba06b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
