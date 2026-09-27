export const name="cloud_off-fill";
export const id="dl_66a3cb787cfe48ef28f6";
export const url=new URL("../icons/cloud_off-fill.svg?v=3a39765abfca13c5136becf6a344d6bb86540dffef2eb3bae2cb4416f722a7e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
