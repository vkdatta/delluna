export const name="patient_list-fill";
export const id="dl_364fba72288f488685db";
export const url=new URL("../icons/P/patient_list-fill.svg?v=ca5af1d95ea17d9110b5187aa8bae9dae48bb787bc3941ec0c904662831acf45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
