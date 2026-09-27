export const name="edit_note-fill";
export const id="dl_74f59ed2a3d0ebbb78b8";
export const url=new URL("../icons/edit_note-fill.svg?v=bf0db2b8fa9e4f26e58c430f3e066fc0c8904ac89016515162f4e659889cf7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
