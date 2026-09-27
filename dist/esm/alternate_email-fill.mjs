export const name="alternate_email-fill";
export const id="dl_c9dd30e457788384d159";
export const url=new URL("../icons/alternate_email-fill.svg?v=a7b5d6327a9d28fadafb4c0a60c44b86921fe34c8576257c29471bcbf50283ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
