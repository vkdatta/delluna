export const name="file-c-sharp-fill";
export const id="dl_0b765d05261a46b8a063";
export const url=new URL("../icons/file-c-sharp-fill.svg?v=ef37a1b573fcc422f9ef89056ff719b2d40f8da5d13ae7e50cf262a28131ea3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
