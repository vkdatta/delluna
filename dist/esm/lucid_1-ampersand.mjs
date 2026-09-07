export const name="lucid_1-ampersand";
export const id="dl_b34bb932bf5e428f99b9";
export const url=new URL("../icons/lucid_1-ampersand.svg?v=a96ed63b4e8a5bd146e4b3a2149492e5970b9eac830819b2a07022ea6d679554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
