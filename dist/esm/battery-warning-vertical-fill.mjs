export const name="battery-warning-vertical-fill";
export const id="dl_ffcff4747b194809a06c";
export const url=new URL("../icons/battery-warning-vertical-fill.svg?v=e2e8e2761c7529bdf34178d24d70dd4e57e9f927e3d781ae5eebad6cc8c591b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
