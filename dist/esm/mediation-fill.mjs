export const name="mediation-fill";
export const id="dl_3dec37521bd9413189b5";
export const url=new URL("../icons/mediation-fill.svg?v=aa90ba0f45f8497f2acbef237f0be623e894c995ff0678d91c10345404aa2c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
