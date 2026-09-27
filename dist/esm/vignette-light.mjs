export const name="vignette-light";
export const id="dl_15cdf03e556655edb071";
export const url=new URL("../icons/vignette-light.svg?v=b72bb9d9374782173ff90260bc95502713322682ed5e08d12f211357582522dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
