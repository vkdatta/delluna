export const name="picture_in_picture_alt-fill";
export const id="dl_520c7185e5164f139df1";
export const url=new URL("../icons/picture_in_picture_alt-fill.svg?v=7e1da3f26bca9fcecb732aa68524b93aae07f8f4760317dd450d813e420d45f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
