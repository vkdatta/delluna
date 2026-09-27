export const name="radical-bold";
export const id="dl_13330c692fde4109849c";
export const url=new URL("../icons/radical-bold.svg?v=ed6f2ab54a790ec362d72d5ca06acb51f1e5b547451f725b108e229546d954e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
