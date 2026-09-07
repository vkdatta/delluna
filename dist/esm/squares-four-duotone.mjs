export const name="squares-four-duotone";
export const id="dl_b55ad9c7090c4ac3b383";
export const url=new URL("../icons/S/squares-four-duotone.svg?v=08872949367b6a6f2f0578ff77364f6c8ebb407942629a28b322194512927381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
