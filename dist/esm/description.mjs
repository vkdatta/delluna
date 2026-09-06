export const name="description";
export const id="dl_d01b4e37c7ba7b93008f";
export const url=new URL("../icons/description.svg?v=8da49b58d46b8793e631baf0db6343441d73f11107a111fdb434e3349ced72ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
