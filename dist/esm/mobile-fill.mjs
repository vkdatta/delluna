export const name="mobile-fill";
export const id="dl_ed20c80a3e543ca9bacc";
export const url=new URL("../icons/mobile-fill.svg?v=7e58ec34a0e8fa2b462d36a2a2393b976c1f6c1ea000e7b2cb46c7e8b8e056b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
