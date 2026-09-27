export const name="enterprise";
export const id="dl_f6540d616ed4b05a6dcb";
export const url=new URL("../icons/enterprise.svg?v=b9faaf1158a72abaa91a019f5f269dceab78723ce347cea3feaf0f516af49880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
