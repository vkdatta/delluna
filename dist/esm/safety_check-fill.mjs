export const name="safety_check-fill";
export const id="dl_f177200bfeeae1722107";
export const url=new URL("../icons/safety_check-fill.svg?v=de0335f03de81b3ca188f63d03514810e2f6a5baa066bf3114ad9a13e787e19a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
