export const name="alternate_email-fill";
export const id="dl_b1a4e3cb05654d678d9e";
export const url=new URL("../icons/alternate_email-fill.svg?v=e252b389e6773491b48eb1a71c4aabcd86c2682cb1c5f4d7ce1f5a7f874b472a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
