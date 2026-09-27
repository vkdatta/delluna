export const name="lucid_3-shrub";
export const id="dl_f40a234a1ab74e459391";
export const url=new URL("../icons/lucid_3-shrub.svg?v=fcdff329e0de6b0f544e1d201ffad092cad781ab0b14c60b02c2f5b182468def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
