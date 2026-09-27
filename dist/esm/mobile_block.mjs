export const name="mobile_block";
export const id="dl_7ba745e88117717fcc13";
export const url=new URL("../icons/mobile_block.svg?v=53b6e6489e06b64a7712f30e6c105839fa1ad6c1c091fd235af462873c24941c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
