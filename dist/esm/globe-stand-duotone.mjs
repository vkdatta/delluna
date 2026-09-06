export const name="globe-stand-duotone";
export const id="dl_ff74581df9394ae4998f";
export const url=new URL("../icons/globe-stand-duotone.svg?v=067dca6f48c8a1e30270eda4891ea34bc0336ca4aa56a9e0279d5291f6cc9f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
