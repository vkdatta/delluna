export const name="microsoft-excel-logo-duotone";
export const id="dl_0f66939ea65847d39fa9";
export const url=new URL("../icons/microsoft-excel-logo-duotone.svg?v=a56b951580203df754fd5869c1f006b9075e077aa5e7e1dcc59b14042a58d67a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
