export const name="attach_file_add";
export const id="dl_ddb68a30e07c376ddc12";
export const url=new URL("../icons/attach_file_add.svg?v=e252264b8ca1a309993e693139187d5533327819917dae4c0e56b18a4a3b84cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
