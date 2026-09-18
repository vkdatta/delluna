export const name="schema";
export const id="dl_792d9eec25d942c5af06";
export const url=new URL("../icons/S/schema.svg?v=af137749b37614d82cf62029589db1070787d69fcc4bfd2062a477e7ccb9d862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
