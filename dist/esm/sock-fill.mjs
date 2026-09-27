export const name="sock-fill";
export const id="dl_c5756df84869d5402149";
export const url=new URL("../icons/sock-fill.svg?v=301ff0879f6f00e38bcc7e3ed77feb57298a292608189f0eaf644ebceea18d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
