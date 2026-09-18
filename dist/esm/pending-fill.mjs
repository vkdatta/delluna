export const name="pending-fill";
export const id="dl_ee3745bb99fa42df9624";
export const url=new URL("../icons/pending-fill.svg?v=263906acd60e22c411e1ffcfa8c285cf954dfd6917219fba361669507d84cebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
