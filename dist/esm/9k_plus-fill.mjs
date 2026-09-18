export const name="9k_plus-fill";
export const id="dl_3f11961942e7478a86dc";
export const url=new URL("../icons/9k_plus-fill.svg?v=cebf3460738a265f86e5d5769a29db8de37f15b8571ed2e977aeede5087a5b39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
