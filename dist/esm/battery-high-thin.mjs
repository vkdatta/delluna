export const name="battery-high-thin";
export const id="dl_89f8b2faed034d63a958";
export const url=new URL("../icons/battery-high-thin.svg?v=61896707754e15c231412f07e8ee9e6cd62b27f1fc6663557cc416c88966a549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
