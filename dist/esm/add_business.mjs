export const name="add_business";
export const id="dl_e3c1b60f90e74d939b5b";
export const url=new URL("../icons/A/add_business.svg?v=45cfc387771289349ff483438f44cadfb8f1abbdaf0a74696790e85d3fa44ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
