export const name="file-image-fill";
export const id="dl_a5f517dad7a649f0ba3c";
export const url=new URL("../icons/file-image-fill.svg?v=e7e2b0109d5c275609b50ce7d6a404182a990cdf4ff52c7f507d787b353278f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
