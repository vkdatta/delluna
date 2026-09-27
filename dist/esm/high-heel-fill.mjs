export const name="high-heel-fill";
export const id="dl_0f994b5a9f044c498bc3";
export const url=new URL("../icons/high-heel-fill.svg?v=01d4d3cabe79b7d80cf8f62fa4a7613c054c40c31a81b966c0e404136b02efa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
