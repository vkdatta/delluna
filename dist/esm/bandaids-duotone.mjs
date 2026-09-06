export const name="bandaids-duotone";
export const id="dl_8a4d13e939994c6999d7";
export const url=new URL("../icons/bandaids-duotone.svg?v=44cfd45ab02fc488e67ba2144f984634ec0120e7a9b11fae0a897dd8de87ec10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
