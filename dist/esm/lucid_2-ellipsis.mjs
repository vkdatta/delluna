export const name="lucid_2-ellipsis";
export const id="dl_3cc1859898ab4eaaaa2a";
export const url=new URL("../icons/lucid_2-ellipsis.svg?v=be6d244872d83b61c4d3d99b8c919329d28eb088656aff7fa85f036dc15a8263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
