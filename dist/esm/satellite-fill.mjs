export const name="satellite-fill";
export const id="dl_86a4c0f4188b46099c6b";
export const url=new URL("../icons/satellite-fill.svg?v=87a953f30da3f8530cd275241c215da0afe5fbc41262d964ed2ca90eb2321643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
