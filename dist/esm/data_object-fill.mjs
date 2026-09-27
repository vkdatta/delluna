export const name="data_object-fill";
export const id="dl_0da25704546abfd095d9";
export const url=new URL("../icons/data_object-fill.svg?v=aea7cb5bbcbfd43654ba42042c554390e1d6944af81cfef3cbe1138e449614c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
