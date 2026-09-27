export const name="user-plus";
export const id="dl_bcb2c98b98e68df10bbe";
export const url=new URL("../icons/user-plus.svg?v=30deca6afc77bcc0d7406140fa3e4dee0cb4a02948867ca122102d150980b5ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
