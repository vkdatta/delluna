export const name="inbox_text";
export const id="dl_91206deac0f76f3b7a37";
export const url=new URL("../icons/inbox_text.svg?v=070bb0a21016bc29b3f750b25923f62912271e23f66311c5a698ab09c494b6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
