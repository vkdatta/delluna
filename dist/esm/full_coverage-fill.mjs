export const name="full_coverage-fill";
export const id="dl_50c5d7d50c5faf1952ff";
export const url=new URL("../icons/full_coverage-fill.svg?v=76f559f6a5bb9300329a817e50ba3f84f06f5cbd24b85bc6d977f9d3138cb291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
