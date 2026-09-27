export const name="domain_verification_off-fill";
export const id="dl_746b89d5911ff02f7ba0";
export const url=new URL("../icons/domain_verification_off-fill.svg?v=4b072fbd214c409c493a2a5dc05f09876a12ad82b5c4eccd0102d572d0bb3a73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
