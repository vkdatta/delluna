export const name="unknown_document";
export const id="dl_1cf3807c3eaf871a1f9f";
export const url=new URL("../icons/unknown_document.svg?v=5c74324bba5844e07ef4b5ef6e14e3dc0202b4dec2e326367d167821ceb268af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
