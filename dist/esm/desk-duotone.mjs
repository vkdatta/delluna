export const name="desk-duotone";
export const id="dl_b9ece332600746838f0c";
export const url=new URL("../icons/desk-duotone.svg?v=5c65dccf77ef6707b8e70dcc32c76387ac8563cd58331a274c0ebd3d14eea465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
