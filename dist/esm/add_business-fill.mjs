export const name="add_business-fill";
export const id="dl_7c41fce4750f461cb9ed";
export const url=new URL("../icons/add_business-fill.svg?v=dc3dd1943d03e7a506bb00fca88f55fef6aaed39dc671db5dc7eaff7d49a5df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
