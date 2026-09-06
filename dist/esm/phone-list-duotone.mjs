export const name="phone-list-duotone";
export const id="dl_f60676f445a3416ab5b2";
export const url=new URL("../icons/phone-list-duotone.svg?v=f472bc1d445ec5b32c1ce0b0c78cf7303d087cd75020d12c7fa0b542bbf56fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
