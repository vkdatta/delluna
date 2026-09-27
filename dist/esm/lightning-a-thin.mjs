export const name="lightning-a-thin";
export const id="dl_f534e2a3aeaa4989b94c";
export const url=new URL("../icons/lightning-a-thin.svg?v=be4a5074246162cdf4553e2426ab780bf1e970ac03a4f7a52fec84f794914cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
