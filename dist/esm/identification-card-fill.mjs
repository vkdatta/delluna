export const name="identification-card-fill";
export const id="dl_f21de01f3c054f8ca425";
export const url=new URL("../icons/identification-card-fill.svg?v=7892b527a51e66396bda21bb5c232ac2c80d0dc6ee69de3e6b93feb0e41015eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
