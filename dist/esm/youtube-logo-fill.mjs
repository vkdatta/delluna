export const name="youtube-logo-fill";
export const id="dl_b7b8c5f538728a9ba4e4";
export const url=new URL("../icons/youtube-logo-fill.svg?v=fce097e65d0df0cb2bb84cd282bb6cc08ccb47ec18d41b7c22870830257065be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
