export const name="cooking";
export const id="dl_93dc569d26594bb08f11";
export const url=new URL("../icons/C/cooking.svg?v=42173c1f5cb9f2e0a8467ce83ca8f49c56b1925599acf8e321f92ecd17e6beb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
