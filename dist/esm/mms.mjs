export const name="mms";
export const id="dl_4301c299a5d3f02ce006";
export const url=new URL("../icons/mms.svg?v=8e71cee4c0bbf2438eaa5d95ec41f7a43d46720d1cd77253d59ac8d3527a3b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
