export const name="lucid_3-rectangle-circle";
export const id="dl_738e6ce223804ca18267";
export const url=new URL("../icons/lucid_3-rectangle-circle.svg?v=f14363e517c628c49d66206b5a5fbccd3f9e3b4cc2694fd9e91821355cf648dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
