export const name="call-fill";
export const id="dl_394e32911897e2e3809a";
export const url=new URL("../icons/call-fill.svg?v=1ef3eed086544e981edc1f0ddb25a0c2998864fceb59e77fce9bf0a9431f50ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
