export const name="lighthouse-duotone";
export const id="dl_c2f1fa9d64b540ed9e16";
export const url=new URL("../icons/lighthouse-duotone.svg?v=aa3122c9aa58b694816039e8bd1efc9e0e578c759599011184921ac38512cac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
