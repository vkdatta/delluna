export const name="clear_all-fill";
export const id="dl_444cece85d144648a9d8";
export const url=new URL("../icons/C/clear_all-fill.svg?v=aece58f1921815a99e1085c4f54b3e2c26c5d50ab9ee22f7e95549123a2293a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
