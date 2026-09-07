export const name="shield-chevron-fill";
export const id="dl_5ef5037272b74da4be62";
export const url=new URL("../icons/S/shield-chevron-fill.svg?v=cad3b510f08704e21e0561cb9298130ee3f8616e963fad8bb35764b8417d0e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
