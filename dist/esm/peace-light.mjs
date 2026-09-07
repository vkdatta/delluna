export const name="peace-light";
export const id="dl_d60821125f604ab282ee";
export const url=new URL("../icons/peace-light.svg?v=7f4b471292246bfa5aa3e269c8010f46a31f7be27d7a31fb1aca8c7173f9b4d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
