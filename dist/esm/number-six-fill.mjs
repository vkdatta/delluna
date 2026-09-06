export const name="number-six-fill";
export const id="dl_c3a6f167c7e44b87b81a";
export const url=new URL("../icons/number-six-fill.svg?v=d3f8b836635e673c2a83c92536ac8bf9eb3605639dd7e0f89a0b2e0c7bf732f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
