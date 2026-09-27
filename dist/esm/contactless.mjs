export const name="contactless";
export const id="dl_8314730d4d25e3b1b704";
export const url=new URL("../icons/contactless.svg?v=e82879a9bcb1a7d5edcb908d3ed885939cde0f967035fb54fd620952d9828745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
