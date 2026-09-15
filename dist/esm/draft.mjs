export const name="draft";
export const id="dl_9fcbfeab3653414bb18f";
export const url=new URL("../icons/D/draft.svg?v=e2326851befd83107b171ccab2f5498fbc1017466870519bde1ec7795f532e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
