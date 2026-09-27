export const name="notes-fill";
export const id="dl_e429eb4a17e8eea46e29";
export const url=new URL("../icons/notes-fill.svg?v=5c27370ebda3b3cd4e928acf66a752729fd4b10ac0974bf21fd542d096953291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
