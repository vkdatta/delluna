export const name="support_agent-fill";
export const id="dl_3f4d82a7a6dc4e6b90ba";
export const url=new URL("../icons/S/support_agent-fill.svg?v=7338f7c3fca60fb35dae27af7e199fe6fac6b6ea76a866de9abc331b0d6e667a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
