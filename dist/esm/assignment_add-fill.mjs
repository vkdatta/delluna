export const name="assignment_add-fill";
export const id="dl_e974a52d22b767fabe73";
export const url=new URL("../icons/assignment_add-fill.svg?v=a2e9eea123b4bb18f58becd973a891f5ca050d6771e02785174320c5f206d228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
