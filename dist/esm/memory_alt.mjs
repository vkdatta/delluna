export const name="memory_alt";
export const id="dl_f2408f4c3f96053f9dd0";
export const url=new URL("../icons/memory_alt.svg?v=e6d9d686a5cb29fb8c10ec76b0576fa5331d2bcfbcb14e14090a79d17a2e63a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
