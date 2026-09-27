export const name="lucid_3-power-off";
export const id="dl_6ef97cd918904f358bca";
export const url=new URL("../icons/lucid_3-power-off.svg?v=d24fd02ce8d71bc5495594b465c5e45c1a8e56f1f349aae742d754ffcddf2f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
