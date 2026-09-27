export const name="currency-kzt-duotone";
export const id="dl_6758cd25cac24f5593f6";
export const url=new URL("../icons/currency-kzt-duotone.svg?v=57ee5565a23c2f41d2ac215fd7c43e8ca3bd24dc046df759198e8f534896570d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
