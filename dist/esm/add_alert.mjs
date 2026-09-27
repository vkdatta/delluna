export const name="add_alert";
export const id="dl_2401af76d9894b198cce";
export const url=new URL("../icons/add_alert.svg?v=d88df1bcbe0482f4f39486eb0854244a236b894df75b209f11befae49516918b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
