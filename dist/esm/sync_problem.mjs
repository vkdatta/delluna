export const name="sync_problem";
export const id="dl_98504bb17a2fbcb42224";
export const url=new URL("../icons/sync_problem.svg?v=a1688eaf5a939d14443e02950ffa4507e9fcdf98945cfcbecd723c87ac219f7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
