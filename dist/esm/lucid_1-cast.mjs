export const name="lucid_1-cast";
export const id="dl_c4b2242229d4469580d4";
export const url=new URL("../icons/lucid_1-cast.svg?v=9a61103a66efb3c07310a96be8ee72d8af503128ed07e51e85fe730dc7615176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
