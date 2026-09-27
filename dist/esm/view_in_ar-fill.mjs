export const name="view_in_ar-fill";
export const id="dl_33cb83b503b90d2be939";
export const url=new URL("../icons/view_in_ar-fill.svg?v=b68ca8b8335b75da68e83855345849e822ee550401dbececf973938ca6fcb6b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
