export const name="cleaning_bucket";
export const id="dl_ff3574f23690d6c2317a";
export const url=new URL("../icons/cleaning_bucket.svg?v=f7f5bfd222f99b3be646fc2ce868fd502e45e44ab7c802df4b04cda5935cb97a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
