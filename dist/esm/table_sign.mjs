export const name="table_sign";
export const id="dl_b7348764ffa46ceeb3bb";
export const url=new URL("../icons/table_sign.svg?v=f832d64148b6fa523f398a84be3e36a5fdb9e09f8dec356a7f25e8b9cbb61dbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
