export const name="looks_5-fill";
export const id="dl_ddf65a463ca14811b3b9";
export const url=new URL("../icons/looks_5-fill.svg?v=8300c5db87d55b6ee87fcbfe0b9877bf7f2a1e2716f109d55429ce2b3c652dc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
