export const name="family_link-fill";
export const id="dl_acdf388bfdf93dce9713";
export const url=new URL("../icons/family_link-fill.svg?v=bf59ace11951bbe851562b15cedd65844e3cbe24fe44b44b3a4bfd06bc74c51b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
