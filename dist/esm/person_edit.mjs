export const name="person_edit";
export const id="dl_faffee2ce846f52aa3ab";
export const url=new URL("../icons/person_edit.svg?v=09f4ec601dc81e10e485c729d29fe90f577cfafd36945f4ddb1665a6ef3d4358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
