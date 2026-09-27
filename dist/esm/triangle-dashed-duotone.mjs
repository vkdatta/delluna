export const name="triangle-dashed-duotone";
export const id="dl_a07a2a0be2a55cf049b7";
export const url=new URL("../icons/triangle-dashed-duotone.svg?v=fc463b310410c5a2ce51702aea9aa0bd4e66f21468468c6e2ef35a3c1ac763dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
