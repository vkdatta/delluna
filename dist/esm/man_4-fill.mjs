export const name="man_4-fill";
export const id="dl_feab949f28e2e48be96a";
export const url=new URL("../icons/man_4-fill.svg?v=eeac320197cba372ecaa44315094d72a032b96e6291b3f1e0d25c4a6cee48318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
