export const name="apk_document";
export const id="dl_74ad46b34a2f41828246";
export const url=new URL("../icons/A/apk_document.svg?v=a510b1783f71c6f852c81fc6a33ee0512b8a8ffabe16f3a6e02d2843d9cac9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
