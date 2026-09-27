export const name="propane";
export const id="dl_bd3d9d6dce905b7ae07d";
export const url=new URL("../icons/propane.svg?v=ade271f05f6c64c9bd94fc50cb4d86708f928c7e4a1840bb3b9b9620cb60307b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
