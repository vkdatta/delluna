export const name="ifl";
export const id="dl_cbd2f60b3043440993f8";
export const url=new URL("../icons/ifl.svg?v=6219ea76d664326557d6c47d224f935c5a99fdef5382dabf73ea5bc49a958a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
