export const name="lucid_2-file-archive";
export const id="dl_51bc8ad980f6470eacda";
export const url=new URL("../icons/lucid_2-file-archive.svg?v=8dcc174ddff45071f44310740628c02381ae8da27fcbfe6fae7b64bb3ab204d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
