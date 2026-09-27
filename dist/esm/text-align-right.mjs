export const name="text-align-right";
export const id="dl_c47b4651bd76ebd5207d";
export const url=new URL("../icons/text-align-right.svg?v=ce876e3838bb7aca886b41a3b86921972a434b10ac31c2ba56d76be12af579bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
