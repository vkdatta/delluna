export const name="folder_eye";
export const id="dl_588c897ea56b442e8928";
export const url=new URL("../icons/folder_eye.svg?v=673d4cb08bc41102fdbd74942177d64b014498842131dafac54de8f6f7222a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
