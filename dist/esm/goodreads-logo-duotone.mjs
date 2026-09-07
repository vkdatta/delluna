export const name="goodreads-logo-duotone";
export const id="dl_acb0cf1017d044d482ed";
export const url=new URL("../icons/goodreads-logo-duotone.svg?v=e282bb4d7056aa6af26ede45e71f9ac46c33d8747566a4fe266872729b5701e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
