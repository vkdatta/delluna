export const name="lucid_3-refresh-cw";
export const id="dl_1c349bfc524944fa9234";
export const url=new URL("../icons/lucid_3-refresh-cw.svg?v=b7c312776872188d997c70c7c6c43cc6bbb0632f8b99e1892f232e075789996f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
