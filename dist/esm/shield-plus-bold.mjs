export const name="shield-plus-bold";
export const id="dl_66216f7a9ad7185b13f6";
export const url=new URL("../icons/shield-plus-bold.svg?v=0c8ceb2c7f146841366168399fe0b9e73a5f47bbce988fbffb32106c9e913418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
