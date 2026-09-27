export const name="gitlab-logo";
export const id="dl_96a0694f4a4247849d35";
export const url=new URL("../icons/gitlab-logo.svg?v=0c7e827b425fcf5f6ea95eceb4e5e3568ff8c8d9f419375df49c853d5e025d72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
