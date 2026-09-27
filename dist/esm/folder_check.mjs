export const name="folder_check";
export const id="dl_c7c3fcce95e460bd2dac";
export const url=new URL("../icons/folder_check.svg?v=a1ccb2c6b7de2f5cded88ff20b8b2b6d727e390eeb077d995bf580c9ee549e08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
