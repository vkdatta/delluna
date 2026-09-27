export const name="keyboard_previous_language";
export const id="dl_7208a373e5dd0d21618e";
export const url=new URL("../icons/keyboard_previous_language.svg?v=be9ff1f07ad73ef594dfba69886e6cf9445623ddcb953a5ad4cc7452267c97e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
