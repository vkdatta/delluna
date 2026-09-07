export const name="vinyl-record-fill";
export const id="dl_2cf2137090bd472b9e18";
export const url=new URL("../icons/V/vinyl-record-fill.svg?v=92552f12cb4dd696977bd7fe04e2a7d35f57fb5e265de8091a817d45433e2296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
