export const name="lucid_3-milestone";
export const id="dl_dc86ff532e934b62a9b1";
export const url=new URL("../icons/lucid_3-milestone.svg?v=cc67b2e15426844b5b652e2f13ea463e9128e3232b0eb95960f7194d14bfd588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
