export const name="picnic-table-bold";
export const id="dl_08c9f2460a074b688630";
export const url=new URL("../icons/picnic-table-bold.svg?v=769bab33963ca8df579daebb3223c24286f44c2ba8643aa9cc5e701f7b4c4c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
