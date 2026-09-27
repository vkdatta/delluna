export const name="phone_forwarded";
export const id="dl_262a3ec78bf3ddceace0";
export const url=new URL("../icons/phone_forwarded.svg?v=7242dbf077fccad4f00ed161a783b49dc556c8689bb374c081cb0306a430b014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
