export const name="sdk";
export const id="dl_0a817affc7374a0303ec";
export const url=new URL("../icons/sdk.svg?v=f9cc2097bea6c57c319de5e9bdefe5eb50eb82488c8d5fa98e23eb58df9f0dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
