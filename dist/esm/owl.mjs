export const name="owl";
export const id="dl_bef90e4162ff46cc18f9";
export const url=new URL("../icons/owl.svg?v=7715a90b3073d7ee8a5ac0d0de4c9fc06f52d568f5eecff739f9c86097ccb923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
