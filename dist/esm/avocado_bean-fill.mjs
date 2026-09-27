export const name="avocado_bean-fill";
export const id="dl_e946752898138d9cc849";
export const url=new URL("../icons/avocado_bean-fill.svg?v=9eb2d58387cd7043eb306fe24d5040b9edcf03bb56a6572d08c39bf40a4b3510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
