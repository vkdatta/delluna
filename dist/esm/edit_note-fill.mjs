export const name="edit_note-fill";
export const id="dl_de711f3c0e784ad4a51c";
export const url=new URL("../icons/E/edit_note-fill.svg?v=6c1e7f469581bfe86f344eacae8ef515388ce7c0a2e6a310af088838e1af9601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
