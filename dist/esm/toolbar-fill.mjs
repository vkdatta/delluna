export const name="toolbar-fill";
export const id="dl_cd3cbff37fa75ac2af4d";
export const url=new URL("../icons/toolbar-fill.svg?v=a7a227965df49e7d72d922ba31c403825e1a407dd6f238dcfbbe89082ead3deb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
