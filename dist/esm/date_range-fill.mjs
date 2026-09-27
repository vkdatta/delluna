export const name="date_range-fill";
export const id="dl_e5810d9520ab06770e91";
export const url=new URL("../icons/date_range-fill.svg?v=6a868f51431b5bc81361f01b95e5fbec7ccd5f0288b0f654c0a88fc130d4092d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
