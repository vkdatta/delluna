export const name="mimo_disconnect-fill";
export const id="dl_ae0b594d87ebca7b1692";
export const url=new URL("../icons/mimo_disconnect-fill.svg?v=4b25f96b6365fcf2319e88dec993b9c38aeac0335a56e3b2870c5db601eb8a56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
