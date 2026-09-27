export const name="lucid_2-fast-forward";
export const id="dl_7cb07f4ee85147dbbb89";
export const url=new URL("../icons/lucid_2-fast-forward.svg?v=aaa8323af7e0d7db4774a43ecf638c348ade39ea8928317da17c6184f7051352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
