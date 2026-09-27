export const name="overview";
export const id="dl_be4b92cac2ab6b298a28";
export const url=new URL("../icons/overview.svg?v=38a855e1c52ba5755dd8781e8314476430cafaf4979b89441676f9c47c9cb3c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
