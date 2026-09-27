export const name="subroutine";
export const id="dl_020f1e7212fe461b935e";
export const url=new URL("../icons/subroutine.svg?v=d988233e7f8ecfad0360258ef5576d0cd75582a56bf042b28459f8647c6f8b70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
