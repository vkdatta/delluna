export const name="list-checks";
export const id="dl_04ab0ed9220b4e4eaaaf";
export const url=new URL("../icons/list-checks.svg?v=a57abbf82d017b6c0d9f28e61eff299ca7f581e9280cdad6f17304eeac7f4ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
