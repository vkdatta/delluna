export const name="sign_language";
export const id="dl_67fafdc7a255fcd53919";
export const url=new URL("../icons/sign_language.svg?v=5b67ffa3cda19dea6548bd32f335170125655390565ce4d2359bb783da5aff46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
