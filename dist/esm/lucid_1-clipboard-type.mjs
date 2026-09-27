export const name="lucid_1-clipboard-type";
export const id="dl_9d6e3ec14e8d4949a1c4";
export const url=new URL("../icons/lucid_1-clipboard-type.svg?v=38801e950a833cfb26dbd36c217b4cb948630c529927de8c1c97619ae0925933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
