export const name="help_clinic";
export const id="dl_d11c710281c048ea9029";
export const url=new URL("../icons/H/help_clinic.svg?v=8beffb35892d5facc02d67712f70ab2cfcba29025e3e780ebd699e2c9722f286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
