export const name="gif-duotone";
export const id="dl_5061e7a4e73d4caeae06";
export const url=new URL("../icons/gif-duotone.svg?v=33c6098246bdc14864415cbe110ddd309e29cb8ddac1a8550ea1a2314d24aa3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
