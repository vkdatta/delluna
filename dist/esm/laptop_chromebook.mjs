export const name="laptop_chromebook";
export const id="dl_a153e63f731c45248e01";
export const url=new URL("../icons/laptop_chromebook.svg?v=473dfc3add161960b8b1eae38e0b145e16d22827dad8ae4d552379d5ac8fbabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
