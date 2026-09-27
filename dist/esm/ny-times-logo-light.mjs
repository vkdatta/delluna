export const name="ny-times-logo-light";
export const id="dl_8062930d98d64208a235";
export const url=new URL("../icons/ny-times-logo-light.svg?v=5918641c385c200494bd3651e1e4bd7870f89388d9e2035f5fa2bf4eb35d4bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
