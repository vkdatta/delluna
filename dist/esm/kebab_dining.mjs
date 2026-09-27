export const name="kebab_dining";
export const id="dl_910c41c7c31ae9a86306";
export const url=new URL("../icons/kebab_dining.svg?v=2a23ee5b2c9d7b10dc9c8b1da89abee0a437f1e1f40af02afbe0a60b0450017e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
