export const name="trademark-registered";
export const id="dl_efd24610cbc54c7cb559";
export const url=new URL("../icons/T/trademark-registered.svg?v=31167b279cf016a551aa1e6fb980139e96f68404f83968f0c1fc882fb84bbe7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
