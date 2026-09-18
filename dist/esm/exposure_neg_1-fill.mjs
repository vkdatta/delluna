export const name="exposure_neg_1-fill";
export const id="dl_3471cf345f98466a8578";
export const url=new URL("../icons/exposure_neg_1-fill.svg?v=5904e98977d23c5cb7dcb9cfef4b99d3410d46a7ce9831baf743edcd9293f98f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
