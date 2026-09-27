export const name="lucid_2-eye-off";
export const id="dl_7d488b9a504f4fdd82b9";
export const url=new URL("../icons/lucid_2-eye-off.svg?v=9c24390d9a3a3baab09447ef2148e873c28fa039f9d596dff2025a669f2de2e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
