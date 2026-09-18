export const name="splitscreen_left";
export const id="dl_b6153fa06c114161af15";
export const url=new URL("../icons/splitscreen_left.svg?v=f66dc7520ca54a28ee25f2e6801583cd9380017272b73016ac2cfd6628f21a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
