export const name="number-three-duotone";
export const id="dl_8f5d4a5cd4974097b83d";
export const url=new URL("../icons/number-three-duotone.svg?v=35452f1f4c6e76644c03e09b36cd24b24fb9b7ab2013730a138de431a2b5b237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
