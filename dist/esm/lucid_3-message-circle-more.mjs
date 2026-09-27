export const name="lucid_3-message-circle-more";
export const id="dl_1f9d549f31b14b1abc86";
export const url=new URL("../icons/lucid_3-message-circle-more.svg?v=084932c66cefe8efbc6d65085989b967b0929fb2fc64243b601d13841bf30e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
