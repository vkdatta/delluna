export const name="text-superscript-thin";
export const id="dl_87eb6c8dc04c9d1ffaff";
export const url=new URL("../icons/text-superscript-thin.svg?v=eb57ab2ccd6be2ba8b32600713bf770cd6a594fc456f8cae5bb0d9565067c127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
