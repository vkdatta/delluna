export const name="rocket";
export const id="dl_8b002699c8034800bbf7";
export const url=new URL("../icons/rocket.svg?v=e8cd9d079c99f5578bc606ba01fd8646a8c5289b3051b018e7e9f30618b8e68c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
