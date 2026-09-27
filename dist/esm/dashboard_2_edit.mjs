export const name="dashboard_2_edit";
export const id="dl_61c3098a01b7d516bdb0";
export const url=new URL("../icons/dashboard_2_edit.svg?v=a51460218484458e5b2f0dd78febc07153dbe14e7d3c629e1d2bbb7d67c727a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
