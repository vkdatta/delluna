export const name="lucid_2-heading-1";
export const id="dl_367d5f188a4e49aebcf5";
export const url=new URL("../icons/lucid_2-heading-1.svg?v=981521de1499b4f05a43f8509859325dc990b68351ff65c6ec8e2300b8bf29a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
