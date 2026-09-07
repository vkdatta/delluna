export const name="lucid_2-list-chevrons-up-down";
export const id="dl_2c48af1c869f4644968f";
export const url=new URL("../icons/lucid_2-list-chevrons-up-down.svg?v=db0e3945aebcefdac960007580ff1739bf137282d1b5079921b2b7c721c4d8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
