export const name="folder_eye-fill";
export const id="dl_f9e3955b07f57741d9e4";
export const url=new URL("../icons/folder_eye-fill.svg?v=d2ec35c9e41d6684d45343d6b409f52147195e1f24af5d1537b0eaf1ceed050b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
