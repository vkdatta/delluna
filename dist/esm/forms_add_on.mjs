export const name="forms_add_on";
export const id="dl_6b2061e6e9254b9da9c4";
export const url=new URL("../icons/forms_add_on.svg?v=660689750f2305ab09f856206cc74310880befd051c7248c9c4282d4366015cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
