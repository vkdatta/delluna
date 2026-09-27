export const name="lucid_3-saudi-riyal";
export const id="dl_d32ffcc0664f4b588035";
export const url=new URL("../icons/lucid_3-saudi-riyal.svg?v=7436acbe365f1c6e5086914b38834ef0639276a2157275f135b280a517fc7e38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
