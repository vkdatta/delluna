export const name="mms";
export const id="dl_67ac9bfd5c477e2c087b";
export const url=new URL("../icons/mms.svg?v=7983fd521bbf6d1ac284fa1c7261fb3fdde59f94a41707a1c7f902857c335992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
