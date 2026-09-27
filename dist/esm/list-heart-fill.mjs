export const name="list-heart-fill";
export const id="dl_91183aa6dc3a476f8265";
export const url=new URL("../icons/list-heart-fill.svg?v=9f3e5f64daf66554c7b5083c7070f6707f27b4afac0810772a132350d0528afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
