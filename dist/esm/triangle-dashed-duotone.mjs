export const name="triangle-dashed-duotone";
export const id="dl_8eec86c73d4e4b6a861e";
export const url=new URL("../icons/T/triangle-dashed-duotone.svg?v=fc463b310410c5a2ce51702aea9aa0bd4e66f21468468c6e2ef35a3c1ac763dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
