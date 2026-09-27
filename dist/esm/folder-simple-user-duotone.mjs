export const name="folder-simple-user-duotone";
export const id="dl_6155350b17f249599cd1";
export const url=new URL("../icons/folder-simple-user-duotone.svg?v=43d08a894cde230ffcbe7a0de2f3a3dc61ed3092f4d5a71f6c45671cb5cfe31f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
