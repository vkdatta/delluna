export const name="storefront";
export const id="dl_b03388a8b237c0a20c1d";
export const url=new URL("../icons/storefront.svg?v=79b55392fe53c773279eb42aa19b390cdab77120226aa6973f8a9c483a8cd90b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
