export const name="person_alert-fill";
export const id="dl_febddd9fb0bc52e95e0d";
export const url=new URL("../icons/person_alert-fill.svg?v=15b6a9d402032c2edef6af29b4ccb92e1bb54c0d2f8e9f9bd178d8a1f9af807a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
