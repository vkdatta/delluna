export const name="lucid_3-notepad-text-dashed";
export const id="dl_3c9f1f0cc50f466e9f1e";
export const url=new URL("../icons/lucid_3-notepad-text-dashed.svg?v=0d362571b3dc22656fd402cac0b6945810f2bd4e5a8581f738efd18726e1dd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
