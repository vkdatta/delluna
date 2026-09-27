export const name="text-italic-duotone";
export const id="dl_88ace33f41df1cf76870";
export const url=new URL("../icons/text-italic-duotone.svg?v=ac70b99c5ef95bfe535c3bf2dec292ed84c41a76fab24fe99d4b300df106f99e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
