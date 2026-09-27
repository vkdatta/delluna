export const name="siren-bold";
export const id="dl_1cd4e25cbefb4957450d";
export const url=new URL("../icons/siren-bold.svg?v=960f5e91c8b66b5597436e2ffc7fde85f3ff3d5e5199effd173cecc5624f431c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
