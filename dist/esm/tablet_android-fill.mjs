export const name="tablet_android-fill";
export const id="dl_17fe4d005dc1e9998fc6";
export const url=new URL("../icons/tablet_android-fill.svg?v=c8fd6e7dc1de778f6b5df832e1687b229555838230d1d2bc5aaddcfd8e806710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
