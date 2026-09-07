export const name="file-png-bold";
export const id="dl_c5f732e103dd4185ba7a";
export const url=new URL("../icons/file-png-bold.svg?v=856ec3e149be8b00afbae1086006a220e7e86f799b4f71552cb969d8ee7d4cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
