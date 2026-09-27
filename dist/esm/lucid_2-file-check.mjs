export const name="lucid_2-file-check";
export const id="dl_deeee4be7e9b4df698f7";
export const url=new URL("../icons/lucid_2-file-check.svg?v=093aeeb0e7565f2b643115387bdd81d734449d4966effd6cb7e2e478875524a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
