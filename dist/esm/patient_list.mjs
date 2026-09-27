export const name="patient_list";
export const id="dl_306ffaf287b02bf7cb98";
export const url=new URL("../icons/patient_list.svg?v=1ded7bfd514d376449334f8061d368c342f9498019bdda1002fe579fe9ab1113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
