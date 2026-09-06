export const name="corners-in-duotone";
export const id="dl_52d8762e330945cda53f";
export const url=new URL("../icons/corners-in-duotone.svg?v=22566e03b1475310630d0a9d9e6fcbd1185cde2dbb9d8b571d9712dbd6949d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
