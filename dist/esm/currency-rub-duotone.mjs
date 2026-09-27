export const name="currency-rub-duotone";
export const id="dl_ab2e6a66a1d247e6a31d";
export const url=new URL("../icons/currency-rub-duotone.svg?v=3a79978f8838448101b1bb8c94c404d1f81d208aa0106f752dadaaf093906ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
