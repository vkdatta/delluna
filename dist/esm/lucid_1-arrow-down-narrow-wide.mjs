export const name="lucid_1-arrow-down-narrow-wide";
export const id="dl_c4b7423a4dbb49be963e";
export const url=new URL("../icons/lucid_1-arrow-down-narrow-wide.svg?v=a3dd981e32e0cbf3229619c3496b562f2697e83c69b89a2e66ee75a770c1652b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
