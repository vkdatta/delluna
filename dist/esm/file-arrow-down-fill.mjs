export const name="file-arrow-down-fill";
export const id="dl_f8c20a2e518141368bae";
export const url=new URL("../icons/file-arrow-down-fill.svg?v=ae11e0b831c4d6f3947010f106b8d3f4c341e0d0d73612d761b077e5aa46c845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
