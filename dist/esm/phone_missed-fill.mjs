export const name="phone_missed-fill";
export const id="dl_084129fdf82776e15eef";
export const url=new URL("../icons/phone_missed-fill.svg?v=a29879a256bea47d659727d2d670836dbd6352511ca4cca029122ea0b6be5504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
