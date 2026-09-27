export const name="123";
export const id="dl_645623caf1e7c8b2256a";
export const url=new URL("../icons/123.svg?v=3714ed3f82f2750c631b32b841c69f5808883e41c0b168620c2e3c940dbb63d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
