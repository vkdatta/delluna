export const name="file-zip-thin";
export const id="dl_f0df06cb2ccb4a199d36";
export const url=new URL("../icons/file-zip-thin.svg?v=51028afe7371f5eb79551c053ddb4cc7e6e43fed73156fc23323913b343d0910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
