export const name="hand-palm-fill";
export const id="dl_0c9f67a8f978480c9df7";
export const url=new URL("../icons/hand-palm-fill.svg?v=30b104d0f8daeb71d7059a41590b67142aa17318a2d72f4963bb29159b53daf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
