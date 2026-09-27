export const name="computer-tower-thin";
export const id="dl_e95945d90df44341ba1d";
export const url=new URL("../icons/computer-tower-thin.svg?v=a55173c55f7cd37f29d14e819dc6f241f55bb012bcd2366065b96bf2bdcf8ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
