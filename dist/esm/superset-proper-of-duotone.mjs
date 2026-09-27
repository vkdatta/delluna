export const name="superset-proper-of-duotone";
export const id="dl_fcf4be435d25de3ee0ea";
export const url=new URL("../icons/superset-proper-of-duotone.svg?v=169ab4a8f430cef71402b72681b59457a7dd857323d265376127cb260afc48d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
