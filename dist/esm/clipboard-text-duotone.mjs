export const name="clipboard-text-duotone";
export const id="dl_aa74eaa4848645b4bf3f";
export const url=new URL("../icons/clipboard-text-duotone.svg?v=0cf19623111bb845343680bea1b61a4bf806eeb50355318b67a3b3281d898d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
