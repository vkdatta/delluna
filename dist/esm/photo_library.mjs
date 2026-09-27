export const name="photo_library";
export const id="dl_a6172877abffb798f20a";
export const url=new URL("../icons/photo_library.svg?v=b6b3a88686f526621c332560c56299fc62b88379ad55959c1a05f2695e21c09e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
