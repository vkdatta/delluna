export const name="contactless";
export const id="dl_9003a4d1d5524d73aafb";
export const url=new URL("../icons/C/contactless.svg?v=31fc7b81d81b8f709211d433ead9b0853f45c08e1bfc661e8d5c2bc1ffd0f850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
