export const name="arrow-u-right-down-thin";
export const id="dl_5fd39a7cf73c4f68a01b";
export const url=new URL("../icons/arrow-u-right-down-thin.svg?v=f2794e6ad20a6f7c7d95d3012bc8b8d2e168cf7089f7b3f028a3fac30b6d96ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
