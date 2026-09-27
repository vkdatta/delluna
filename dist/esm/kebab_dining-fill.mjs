export const name="kebab_dining-fill";
export const id="dl_4f4c586182c0aeadfceb";
export const url=new URL("../icons/kebab_dining-fill.svg?v=371a37e263303b4c97762d2e555b8e924b0f6f1193e1c19c0704b8ee3402a5e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
