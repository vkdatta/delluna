export const name="lucid_1-accessibility";
export const id="dl_4994fafa4c3348ad9b19";
export const url=new URL("../icons/lucid_1-accessibility.svg?v=3f8a018499c0b55036a2089e18fafc346bfbf6a62702176b72494c1d3504b649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
