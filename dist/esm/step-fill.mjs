export const name="step-fill";
export const id="dl_c2245bc949c56cc3893f";
export const url=new URL("../icons/step-fill.svg?v=99e1a6d6ef9d63e189dcd0352a6092b1bb46283c883efc15f2cdedf64a2cfd5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
