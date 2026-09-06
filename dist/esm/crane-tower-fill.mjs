export const name="crane-tower-fill";
export const id="dl_88f46821e4d7451586d4";
export const url=new URL("../icons/crane-tower-fill.svg?v=bce2030aedeb34cd5a6fd213a4184b8db21f2963e2ab877f3ba91d276aa405d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
