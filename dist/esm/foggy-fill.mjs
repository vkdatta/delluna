export const name="foggy-fill";
export const id="dl_1ad84fe5beccb2902a2b";
export const url=new URL("../icons/foggy-fill.svg?v=73fcd0e44bb45092f61a1757efc0986b4e683aa89bccdd9138e2b8ad7dde6d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
