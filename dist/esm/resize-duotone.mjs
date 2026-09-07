export const name="resize-duotone";
export const id="dl_d55d5a8616184cfd88e3";
export const url=new URL("../icons/resize-duotone.svg?v=f31328a5c32d976c2ccf879dc319bd4ec755024efec24ace8034e6d682d9c46c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
