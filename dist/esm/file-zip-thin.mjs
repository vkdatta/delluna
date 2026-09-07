export const name="file-zip-thin";
export const id="dl_f0df06cb2ccb4a199d36";
export const url=new URL("../icons/file-zip-thin.svg?v=9188450c0ede5186ca7462ffad94f2d6fe5eed080af902ed479331f9f9df5e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
