export const name="lucid_2-folder-bookmark";
export const id="dl_d2ab403ad6dc4e008491";
export const url=new URL("../icons/lucid_2-folder-bookmark.svg?v=872ab008f05eb7e21814c84aa8fd8f75b0cb916aa32b8bbdf0faf92a75dc3cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
