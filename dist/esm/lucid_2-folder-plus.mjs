export const name="lucid_2-folder-plus";
export const id="dl_c128a57a4e2d4f21b280";
export const url=new URL("../icons/lucid_2-folder-plus.svg?v=703f7fbab4273d4e86314535391f184cfaceaf8082f7a760b6fec6bab1aaf8e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
