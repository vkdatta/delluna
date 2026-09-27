export const name="lucid_1-clover";
export const id="dl_50db1593ceb44fcbac69";
export const url=new URL("../icons/lucid_1-clover.svg?v=0ab28ac38edded6582395e4dfae295eaaa9797c258939f7ff5954bf7ac44becc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
