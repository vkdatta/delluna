export const name="page_footer-fill";
export const id="dl_45eb4f606a9563ecbe7f";
export const url=new URL("../icons/page_footer-fill.svg?v=c3ca7084d930345d2fc760b89f8d6294b29bc0a611fd4eb0aec26bfa14275979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
