export const name="footprints-fill";
export const id="dl_4decf7cae97b40aeaa48";
export const url=new URL("../icons/footprints-fill.svg?v=85672035f495278ad9b615b299f4f12d46b5080f3ca3b1d3fdea4184f69dc745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
