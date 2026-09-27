export const name="google-photos-logo-fill";
export const id="dl_891baf93941d4c818b97";
export const url=new URL("../icons/google-photos-logo-fill.svg?v=4b7adbefdba7a40113c2525f8bc4bab9d85e8cbe0ee0b277b875d6cba23b5426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
