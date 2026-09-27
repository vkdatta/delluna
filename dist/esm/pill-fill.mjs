export const name="pill-fill";
export const id="dl_9857fbbf3a3942979b10";
export const url=new URL("../icons/pill-fill.svg?v=aec89b2ab00fb92400ab40f69e3b9ce0b2a3fa3f72bda643d5be014937583b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
