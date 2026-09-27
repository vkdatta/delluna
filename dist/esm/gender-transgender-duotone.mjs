export const name="gender-transgender-duotone";
export const id="dl_4a75d54f9d2149deb573";
export const url=new URL("../icons/gender-transgender-duotone.svg?v=b54f4b1a8f086ad8998e2bfeef3b1f352ed2959cfb9301a3a50952371f884577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
