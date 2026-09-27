export const name="lucid_3-mouse-right";
export const id="dl_f8345c58a23f4edaa000";
export const url=new URL("../icons/lucid_3-mouse-right.svg?v=daeda5a2f542739e80a9283eb723b694809ee2d11a11ff240cc9abfa294ca4f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
