export const name="dots-three-circle-vertical-light";
export const id="dl_4b9b946dc3494f118d44";
export const url=new URL("../icons/dots-three-circle-vertical-light.svg?v=f6f757ab97352099beb5038d4355151938e874575dd8b28af320296e47b6bfea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
