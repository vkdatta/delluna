export const name="lucid_2-fast-forward";
export const id="dl_7cb07f4ee85147dbbb89";
export const url=new URL("../icons/lucid_2-fast-forward.svg?v=470e2ddd162412ed4ab4c5d09baf286abdca574684d7c11fe797fbe6993fba08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
