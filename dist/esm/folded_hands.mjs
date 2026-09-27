export const name="folded_hands";
export const id="dl_dfc412aaadf3c90243fa";
export const url=new URL("../icons/folded_hands.svg?v=7bc2735636a2274bcb77a3301447f431a633a8d4ef6e8aa0394de376f26bb127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
