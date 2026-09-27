export const name="forms_add_on";
export const id="dl_16f5e112270874946f75";
export const url=new URL("../icons/forms_add_on.svg?v=0027b0e7e710070245bc57737a9872ebf317222d66442447ccb9aeba552496ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
