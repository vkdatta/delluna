export const name="lucid_3-square-chevron-right";
export const id="dl_1fe0be603e064b628abc";
export const url=new URL("../icons/lucid_3-square-chevron-right.svg?v=f1898684046e9e420b00f6dcf35bd0cd247a49f11c6277e69a45f9f6e2fa8069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
