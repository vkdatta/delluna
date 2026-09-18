export const name="table_edit";
export const id="dl_3f0fcb8f2ec0429e8fe9";
export const url=new URL("../icons/table_edit.svg?v=e91b6df30f2a4c4a23316db960185009006e66fe4982c3193aacdf1344d0ff58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
