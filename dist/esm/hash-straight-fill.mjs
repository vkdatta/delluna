export const name="hash-straight-fill";
export const id="dl_776e70ccde68421489ce";
export const url=new URL("../icons/hash-straight-fill.svg?v=3c7e8ba6073c25c2f21b8b12ab74abe4b49b96dca4a8e3a9e8b4df02765c3330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
