export const name="file_save_off";
export const id="dl_300bc89ab8ad24933c8d";
export const url=new URL("../icons/file_save_off.svg?v=c99dac7c97e42b131c62f841b57d7a5a8a80e889c037d496a7fb3e63aa1ec425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
