export const name="person_check";
export const id="dl_dc0d9ebf4f1a8ffaf441";
export const url=new URL("../icons/person_check.svg?v=dfaf2e7601eb3fe7b5c42b92bd5711ee8a2f08fa2e98fc2f90be7f51a717e9da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
