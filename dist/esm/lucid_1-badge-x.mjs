export const name="lucid_1-badge-x";
export const id="dl_2e7448e053b547c4a67c";
export const url=new URL("../icons/lucid_1-badge-x.svg?v=98008c6cccb801963065a90a48e6a2cf30e3a0784270d21ca501a2a4029eb9f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
