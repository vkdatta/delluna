export const name="credit_card_heart-fill";
export const id="dl_b6d1712546f9ef536067";
export const url=new URL("../icons/credit_card_heart-fill.svg?v=c0841a95d6534982883276454e2cdac034852cefd9423609daffa382889060ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
