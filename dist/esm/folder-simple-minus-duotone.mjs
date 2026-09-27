export const name="folder-simple-minus-duotone";
export const id="dl_ce954ff8bd4c464bb007";
export const url=new URL("../icons/folder-simple-minus-duotone.svg?v=670a7230b939f1c1a7214264d0e78badedc17551a6476725223270df9cda27db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
