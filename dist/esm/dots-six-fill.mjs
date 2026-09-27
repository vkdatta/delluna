export const name="dots-six-fill";
export const id="dl_7eb6452b79e94735b1a2";
export const url=new URL("../icons/dots-six-fill.svg?v=c365c83678e79c5eb077e48cbc5fc1a792e05d33f8333657db6174699d18423b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
