export const name="fire-simple-fill";
export const id="dl_3bf444577b0e46049ddb";
export const url=new URL("../icons/fire-simple-fill.svg?v=e9b020f9d20e26a4d525b658ac0de9a5ef4d1892ace3052ffa7f46bcf8eecaa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
