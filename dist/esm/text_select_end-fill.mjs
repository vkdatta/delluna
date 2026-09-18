export const name="text_select_end-fill";
export const id="dl_cce62488ba9144f29606";
export const url=new URL("../icons/text_select_end-fill.svg?v=14a237db753ed74d9732a526d5a20fbce1e4f2673018822a5e30d2dc828df38b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
