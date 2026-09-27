export const name="warning-octagon-light";
export const id="dl_c878c93ca31488714abb";
export const url=new URL("../icons/warning-octagon-light.svg?v=af2c336e5ef1796f50dc1a306d3f623d830369575a958809707f8949572a3db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
