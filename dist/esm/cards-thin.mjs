export const name="cards-thin";
export const id="dl_c8964df062e7431a9dda";
export const url=new URL("../icons/cards-thin.svg?v=85e6af28777e3707372ed50c16323c2f389abfe60d140f0651a1590567197b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
