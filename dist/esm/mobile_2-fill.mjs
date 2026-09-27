export const name="mobile_2-fill";
export const id="dl_6ff9f0e9372d3b4d1f45";
export const url=new URL("../icons/mobile_2-fill.svg?v=43d72dc6ebd82313a7f63f5652da59484b8de2ca3240ee7cb1ae451021bbfd26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
