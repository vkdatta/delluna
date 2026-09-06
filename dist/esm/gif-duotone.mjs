export const name="gif-duotone";
export const id="dl_5061e7a4e73d4caeae06";
export const url=new URL("../icons/gif-duotone.svg?v=5b32706cd79d726b6b2b24324f4a02368daa37a98ae03ea2f06250896964cf06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
