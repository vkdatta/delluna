export const name="lucid_2-heading-1";
export const id="dl_367d5f188a4e49aebcf5";
export const url=new URL("../icons/lucid_2-heading-1.svg?v=2629ea2915f1515c6370fb4e2153156165f05717f1b0d47a933731748061f154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
