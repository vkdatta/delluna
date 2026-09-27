export const name="phone-x-fill";
export const id="dl_d9bdfe515a184577af88";
export const url=new URL("../icons/phone-x-fill.svg?v=8b8f783741ebd0c454137b59c1a5b013cd527c3d1c90782df6d8b7da3b2a7782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
