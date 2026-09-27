export const name="lucid_1-accessibility";
export const id="dl_4994fafa4c3348ad9b19";
export const url=new URL("../icons/lucid_1-accessibility.svg?v=ebe8649008daa60e020355ac288b989caa6943d4e85bf09f8995be7a9f7fd7dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
