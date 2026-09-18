export const name="medical_information-fill";
export const id="dl_6bb318c0c98540cfae94";
export const url=new URL("../icons/M/medical_information-fill.svg?v=d6e909ded44c93285ec7b7ca6e5578bdfc852b18bdc6a1b58f8a67e3f7ee3d75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
