export const name="emergency-fill";
export const id="dl_57a1116200ef40839ca5";
export const url=new URL("../icons/E/emergency-fill.svg?v=09b2d43284c0be507c133b86d51b6a8223aa54a225fb137ff93714d4cadb37c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
