export const name="pen-nib-duotone";
export const id="dl_46cce5d84e4b4e339806";
export const url=new URL("../icons/pen-nib-duotone.svg?v=a6a219924ecb5b7c6b5e2ef0e9088c8fab0d7d7483f20daf86d6003cfad8422b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
