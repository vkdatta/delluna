export const name="medical_services-fill";
export const id="dl_54ec60c3d7d2a51e42e4";
export const url=new URL("../icons/medical_services-fill.svg?v=56467c18131b473fdc5fa88838839f0f4e4c43b243584aa9e3580944b90a9e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
