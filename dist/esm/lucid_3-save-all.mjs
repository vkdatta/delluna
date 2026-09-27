export const name="lucid_3-save-all";
export const id="dl_59580d42e52d45e88e6a";
export const url=new URL("../icons/lucid_3-save-all.svg?v=ecf35260c6961cfcb5bf149466b3f28c0a045d2f9c369912e6e2f7c6c03ac78a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
