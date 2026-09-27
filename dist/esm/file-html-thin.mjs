export const name="file-html-thin";
export const id="dl_663c14fe2e774912b3f4";
export const url=new URL("../icons/file-html-thin.svg?v=1e4ded4817a57a3e09b5104e281540fbf4720c3a7dc9d16ad286164745f15a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
