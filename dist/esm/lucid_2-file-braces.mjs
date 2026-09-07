export const name="lucid_2-file-braces";
export const id="dl_7b66b26a1da6419fb627";
export const url=new URL("../icons/lucid_2-file-braces.svg?v=912c99a48678307abe75151a610faeaaf10d5bd82653e7f7e5cf0c4a8a41475e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
