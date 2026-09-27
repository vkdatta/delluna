export const name="crop_7_5";
export const id="dl_ec66b8a508b0cbfe8dd6";
export const url=new URL("../icons/crop_7_5.svg?v=d4a41e6507870298b8f1a976b6b8c390f47f3538bef9ed7aa7429af2e0c81105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
