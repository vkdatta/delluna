export const name="file-x";
export const id="dl_2afdad43d99f4a3e8129";
export const url=new URL("../icons/file-x.svg?v=775739eb0be168bec67c02c87223bd09589d4f7222c234bb8d07ae733f87e82c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
