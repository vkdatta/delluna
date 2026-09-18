export const name="person_add-fill";
export const id="dl_cd040464d0b84eda839e";
export const url=new URL("../icons/person_add-fill.svg?v=7f99a7b3407ccd4bc8b3a63f182867b924cb658ae2a1349c29e69a0635c0833f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
