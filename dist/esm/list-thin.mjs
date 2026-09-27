export const name="list-thin";
export const id="dl_42ac4600149742199e8f";
export const url=new URL("../icons/list-thin.svg?v=d09541d74978f2c4d1adf06ea792080d13b231b11609ae6f2c5465c9de68c8b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
