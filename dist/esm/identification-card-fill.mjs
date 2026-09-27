export const name="identification-card-fill";
export const id="dl_f21de01f3c054f8ca425";
export const url=new URL("../icons/identification-card-fill.svg?v=3df6f3a599d2b91f769b755f9b2b36f9728b7f8928055ca37eba844a51ec0c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
