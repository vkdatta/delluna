export const name="webhooks-logo-duotone";
export const id="dl_30b96a4526f033be4bb4";
export const url=new URL("../icons/webhooks-logo-duotone.svg?v=010af73923896fff247ef0b152d4d719718cfdb158619e4c43606a46bb36f119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
