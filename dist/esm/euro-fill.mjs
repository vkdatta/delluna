export const name="euro-fill";
export const id="dl_5acf9994eae518020a17";
export const url=new URL("../icons/euro-fill.svg?v=7a9aa9e9cbc47ad2741d97afb5dc83b3872e8d24e43639100dce2baa2540d224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
