export const name="remove_done-fill";
export const id="dl_94a44b7db8ed035a67f9";
export const url=new URL("../icons/remove_done-fill.svg?v=5b5d9425a1daa2260e57d4c1d97281cb395406d12081f6cbf2d5d18154193d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
