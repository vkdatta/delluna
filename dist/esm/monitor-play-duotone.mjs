export const name="monitor-play-duotone";
export const id="dl_051459892c3642fd9f34";
export const url=new URL("../icons/monitor-play-duotone.svg?v=e53632b70af0b69936eb9f89acc0f5bd009a6a8c62b4cc55ca9e9dc1994ccd3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
