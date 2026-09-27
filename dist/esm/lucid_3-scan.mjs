export const name="lucid_3-scan";
export const id="dl_a1bc98aaf115437d83cb";
export const url=new URL("../icons/lucid_3-scan.svg?v=062217945d5be5dd5e78d77fcfb0252c6972d2e6d90d8fb852ff0d0dee6d0cf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
