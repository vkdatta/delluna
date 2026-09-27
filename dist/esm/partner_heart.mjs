export const name="partner_heart";
export const id="dl_8001a2fdd3a6d83efad1";
export const url=new URL("../icons/partner_heart.svg?v=26c1d471ef2938516224b3b2e17dcbd27a5f150580fa28813576b7fb10d3e1af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
