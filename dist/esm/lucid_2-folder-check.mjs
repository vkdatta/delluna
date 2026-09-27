export const name="lucid_2-folder-check";
export const id="dl_4c0614fda5694c56bca9";
export const url=new URL("../icons/lucid_2-folder-check.svg?v=8ba7e1b9e118f8e683df38697ea4d7407e21d74d586f102b696457dfcacdb400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
