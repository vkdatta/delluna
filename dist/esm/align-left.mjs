export const name="align-left";
export const id="dl_540c27efb9b54b0bae42";
export const url=new URL("../icons/align-left.svg?v=03c09065fea49695595da276167a84ccc406628d53ebd953d7fc4afa15ebb592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
