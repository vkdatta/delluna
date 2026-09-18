export const name="signal_cellular_off";
export const id="dl_11a497379c994adc9f4f";
export const url=new URL("../icons/signal_cellular_off.svg?v=d869f8d3a14d3b6d92c1eac2fe2b8f717e7cfd189bdc2c6847b4c42265dd8049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
