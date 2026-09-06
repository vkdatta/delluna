export const name="lucid_1-calendar-heart";
export const id="dl_6823a97799ba4e76bb34";
export const url=new URL("../icons/lucid_1-calendar-heart.svg?v=446656c1e15c1075c27293448fe2e10a534125abba91ef01895733dd6356e1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
