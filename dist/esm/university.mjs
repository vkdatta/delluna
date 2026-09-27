export const name="university";
export const id="dl_d27b5dba7ecb4ede9ebe";
export const url=new URL("../icons/university.svg?v=87a4618778582751decc1288317702e12611abf2e6a4b57e7031daa4afbac3b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
