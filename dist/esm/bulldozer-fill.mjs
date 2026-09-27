export const name="bulldozer-fill";
export const id="dl_5bafb4f74db9407c92b3";
export const url=new URL("../icons/bulldozer-fill.svg?v=c5e0ba9b1b4e4dbd4d158e3b1a75cb77339ccd41174e2e6655d054e77a3cf6f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
