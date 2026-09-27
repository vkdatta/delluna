export const name="seal-check-fill";
export const id="dl_53649984e20ca160ee1d";
export const url=new URL("../icons/seal-check-fill.svg?v=44d49ff269540d0e77860cef7140a653cd1c9757f4a452774c7b9277b8f2ed07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
