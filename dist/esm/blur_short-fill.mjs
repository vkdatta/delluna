export const name="blur_short-fill";
export const id="dl_77bb398a2fffd32c0a89";
export const url=new URL("../icons/blur_short-fill.svg?v=f1f14910e965bb2449cde7ed6d85939e0c1d512c032c90fdbb1cedab83fd21cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
