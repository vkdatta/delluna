export const name="oven_gen-fill";
export const id="dl_0f6c0a50e56cbe288879";
export const url=new URL("../icons/oven_gen-fill.svg?v=27750d290f2060c8761fdddb672bf87a2cf826685cce80d84b0286c1799b3581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
