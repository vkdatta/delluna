export const name="oral_disease-fill";
export const id="dl_712d65542717e815d474";
export const url=new URL("../icons/oral_disease-fill.svg?v=2b73d783aba043594956731852482e2cbc4a63432d1febdecfec35c86c6c5823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
