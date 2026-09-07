export const name="align-top-simple-fill";
export const id="dl_eb2e5c5156e1466488e8";
export const url=new URL("../icons/align-top-simple-fill.svg?v=2d3d27e156ab5f8d079ed6156d189b909cf4a1705a43298d7d9c47554736ca72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
