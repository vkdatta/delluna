export const name="lucid_3-octagon-alert";
export const id="dl_10638f22d70b4df49800";
export const url=new URL("../icons/lucid_3-octagon-alert.svg?v=b0e03082ad3e817359119dec27c90ba6d770d5ce8bf161475406934e2d830672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
