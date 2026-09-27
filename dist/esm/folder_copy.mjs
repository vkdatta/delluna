export const name="folder_copy";
export const id="dl_83c6774f388091a4ab94";
export const url=new URL("../icons/folder_copy.svg?v=d8a3a8ff1698b1e6ccb45a1105968309275d7e7a5cb9ec949df078d90533bfa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
