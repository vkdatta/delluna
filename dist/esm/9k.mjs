export const name="9k";
export const id="dl_5b735d02ce5522938fcc";
export const url=new URL("../icons/9k.svg?v=6cbb1312232d894dbfa999405568d755141fedce94f1716ed81fef0fb1dd6d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
