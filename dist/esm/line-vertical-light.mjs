export const name="line-vertical-light";
export const id="dl_7f67900a67b045a2a5f3";
export const url=new URL("../icons/line-vertical-light.svg?v=67b8483571502f7ccfc6312e256d0ae9e5386930b8f220c905328101169cbfa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
