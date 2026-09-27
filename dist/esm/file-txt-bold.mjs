export const name="file-txt-bold";
export const id="dl_715972e522d64e2a9e75";
export const url=new URL("../icons/file-txt-bold.svg?v=5e16f71d9ca89e5a5c306116c710671f0fd88779a6084968ab3dbc95eeefed21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
