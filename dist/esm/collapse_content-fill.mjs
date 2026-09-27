export const name="collapse_content-fill";
export const id="dl_1f3c8788cdea8ddab641";
export const url=new URL("../icons/collapse_content-fill.svg?v=31523c1a0c96639237bc96e0e8bb98a5236c0810158145c5d1af090e97ba7b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
