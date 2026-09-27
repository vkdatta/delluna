export const name="charging-station-thin";
export const id="dl_ac1164780cbe40d79902";
export const url=new URL("../icons/charging-station-thin.svg?v=5d557a64f1ca34dd3dac1b9f465b91e144e2a402cea16ca4fc108c8c3f2190bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
