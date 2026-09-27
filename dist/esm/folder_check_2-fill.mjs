export const name="folder_check_2-fill";
export const id="dl_a86d6b95a7452f2558eb";
export const url=new URL("../icons/folder_check_2-fill.svg?v=c830a4d47d948d8e198c80aa02d59083da9248945d4f2c269c02b96fcfca5de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
