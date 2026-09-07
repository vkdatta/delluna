export const name="qr-code-thin";
export const id="dl_305f9330ae284a3d8054";
export const url=new URL("../icons/qr-code-thin.svg?v=9fde78f40961fa681e7006273475cb4d4d371f778407582a5b72020138cdc7fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
