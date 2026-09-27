export const name="lucid_3-share";
export const id="dl_319b309b41bc43e1bb11";
export const url=new URL("../icons/lucid_3-share.svg?v=a4bc6ab649234431efd9460d94d34c9493aa5c0d6ed84ec0fa2e8fb7e32f7bcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
