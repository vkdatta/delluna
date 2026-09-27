export const name="2k_plus";
export const id="dl_711e6acd5c603126cd29";
export const url=new URL("../icons/2k_plus.svg?v=76620b169ef6a0e50fde2b2814c1b8132a4c50ecbae5c2fb577fe37aaf7cd842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
