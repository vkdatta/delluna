export const name="folder-simple-minus-duotone";
export const id="dl_ce954ff8bd4c464bb007";
export const url=new URL("../icons/folder-simple-minus-duotone.svg?v=a3adf61a066e56bd8c4df4a42f5cc0f4875dc1cff476fa57b00568802cd322c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
