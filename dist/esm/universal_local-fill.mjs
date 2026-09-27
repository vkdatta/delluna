export const name="universal_local-fill";
export const id="dl_32fff3e546cf20c80fa4";
export const url=new URL("../icons/universal_local-fill.svg?v=ba5bd4f66ac6488a2a6cf112253167bab9050c692f49fdbc9615bfb16901bad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
