export const name="lucid_1-case-lower";
export const id="dl_7532debb23964b36bc38";
export const url=new URL("../icons/lucid_1-case-lower.svg?v=63ebbbb0932e4be224bdfa93eaf2e48e8536598ff1a7c2f691ee07230faab845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
