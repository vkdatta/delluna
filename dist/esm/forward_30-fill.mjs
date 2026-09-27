export const name="forward_30-fill";
export const id="dl_8ead6dd3cf4f14c99e72";
export const url=new URL("../icons/forward_30-fill.svg?v=2ec93d169184aad35ed388b594611cf45e441bb2b116d1701345db36907a3744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
