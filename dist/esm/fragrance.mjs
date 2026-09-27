export const name="fragrance";
export const id="dl_e9dfb0096423bb254f46";
export const url=new URL("../icons/fragrance.svg?v=24d2495363c798de62499fc0f7d4b6cfd48a4f2d66be7db6bf30ac8bb1189e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
