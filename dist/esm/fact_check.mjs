export const name="fact_check";
export const id="dl_0bec3199dd5dcf6bc8b9";
export const url=new URL("../icons/fact_check.svg?v=dc1c5ec6bfb3a0b8dbf2dfe8e8f1db09361f4df04e7540d502505b5924989829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
