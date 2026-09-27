export const name="lucid_3-phone";
export const id="dl_cf25a60dab584949b971";
export const url=new URL("../icons/lucid_3-phone.svg?v=c880216153d15e7559be0fd2447a4a769f8626df1161129bc438a58db8b5a6e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
