export const name="sip";
export const id="dl_0dd457e6274ab0067444";
export const url=new URL("../icons/sip.svg?v=f0a7d46e633ac2dd26dffd792fac7ecc3a5366871a18887c22555f06b2353708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
