export const name="unknown_document-fill";
export const id="dl_fcf679fa720f3fe9f52b";
export const url=new URL("../icons/unknown_document-fill.svg?v=9115c8faae372ce8fcdf183fca8b42222bb8e4d2ec53f7f49c6edeb555484665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
