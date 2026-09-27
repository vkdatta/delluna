export const name="local_hospital";
export const id="dl_52e4118d73e9784e45ca";
export const url=new URL("../icons/local_hospital.svg?v=373fa200204c4c75d27cc844ff5f63807a450f00e90e8245f98cb79d927075cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
