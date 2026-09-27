export const name="view_in_ar";
export const id="dl_27e4a6e10651a93aba01";
export const url=new URL("../icons/view_in_ar.svg?v=f7e62f55820ee12083ca5a7ff8b83cfc31fb5587465c2cc2e715a103097e733e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
