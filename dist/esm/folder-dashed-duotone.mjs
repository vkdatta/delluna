export const name="folder-dashed-duotone";
export const id="dl_34d0cf8d093b44aba03f";
export const url=new URL("../icons/folder-dashed-duotone.svg?v=4faea1ec02db4289054138e30d38ad0c5c874ad5966a289bc5be6aa053c946ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
