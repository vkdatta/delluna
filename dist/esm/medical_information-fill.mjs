export const name="medical_information-fill";
export const id="dl_54a0d71c0128cb563819";
export const url=new URL("../icons/medical_information-fill.svg?v=b5164af9a952938dbd2af1a8c975301dbca255151ff11e51f2371e7f4556ce9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
