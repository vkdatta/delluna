export const name="hdr_plus-fill";
export const id="dl_8d6d31ea211784b4685d";
export const url=new URL("../icons/hdr_plus-fill.svg?v=ce63226f738a055b3492822607dd4832d965c8b261cda027bd695b9daeb5e0e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
