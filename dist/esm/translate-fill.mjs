export const name="translate-fill";
export const id="dl_47a00a7c270dd893e05f";
export const url=new URL("../icons/translate-fill.svg?v=de467f069e92ff70e0a2cc40d648fba503b38ebb3be9491250c21df6ed455a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
