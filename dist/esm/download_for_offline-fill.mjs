export const name="download_for_offline-fill";
export const id="dl_be74b25bf1dd1004fb07";
export const url=new URL("../icons/download_for_offline-fill.svg?v=019fa4e96ea1e4f0d07e5053219a1dff6dfcab9c98f9fd9800e40d74d6912915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
